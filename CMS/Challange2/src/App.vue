<script >
import Swal from 'sweetalert2'

import axios from 'axios';

import Navbar from './pages/Navbar.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Dashboard from './pages/Dashboard.vue';
import Food from './pages/Food.vue';
import Category from './pages/Category.vue';
import Logs from './pages/Logs.vue';
import AddFood from './pages/AddFood.vue';
import AddCategory from './pages/AddCategory.vue';
import EditFood from './pages/EditFood.vue';
import EditCategory from './pages/EditCategory.vue';
import TableRowFood from './components/TableRowFood.vue';

export default {
  components: {
    Navbar,
    Login,
    Register,
    Dashboard,
    Dashboard,
    Food,
    Category,
    Logs,
    AddFood,
    AddCategory,
    EditFood,
    EditCategory
  },

  data() {
    return {
      currentPage: `${localStorage.getItem('token') ? 'dashboard' : 'login'}`,
      ORIGIN: 'http://localhost:3001',
      dashboard: {
        foodCount: 0,
        categoryCount: 0
      },
      food: [],
      categories: [],
      history: [],
      editFoodId: 0,
      editFoodData: {},
      editCategoryId: 0,
      editCategoryData: {},
      username: localStorage.getItem('username')
    }
  },

  created() {
    if (localStorage.getItem('token')) {
      this.getFood()
      this.getCategories()
      this.getHistory()
    }
  },

  methods: {
    async switchPage(to) {
      this.currentPage = to
    },
    async login(email, password) {
      try {
        // console.log(email, password);
        const { data } = await axios({
          method: 'POST',
          url: `${this.ORIGIN}/login`,
          data: {
            email: email,
            password: password
          }
        })
        localStorage.setItem('token', data.token)
        localStorage.setItem('username', data.username)
        localStorage.setItem('userId', data.userId)
        localStorage.setItem('role', data.role)
        this.getFood()
        this.getCategories()
        this.getHistory()
        this.currentPage = 'dashboard'
        this.username = localStorage.getItem('username')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Succes login!',
          showConfirmButton: false,
          timer: 1850
        })
      } catch (err) {
        console.log(err)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `${err.response.data.message}`,
          showConfirmButton: true,
          timer: 8000
        })
      }
    },
    async register(newAccount) {
      try {
        // console.log(newAccount)
        let { data } = await axios({
          method: 'POST',
          url: `${this.ORIGIN}/register`,
          data: {
            username: newAccount.username,
            email: newAccount.email,
            password: newAccount.password,
            phoneNumber: newAccount.phoneNumber,
            address: newAccount.address
          }
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Success created account, please login`,
          showConfirmButton: false,
          timer: 1850
        })
        this.switchPage('login')
      } catch (err) {
        console.log(err)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `${err.response.data.message}`,
          showConfirmButton: true,
          timer: 8000
        })
      }
    },
    async getFood() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${this.ORIGIN}/food`,
          headers: {
            token: localStorage.getItem('token')
          }
        })
        // console.log(data);
        this.dashboard.foodCount = data.length
        this.food = data
      } catch (err) {
        console.log(err)
      }

    },
    async getCategories() {
      try {
        let { data } = await axios({
          method: 'GET',
          url: `${this.ORIGIN}/categories`,
          headers: {
            token: localStorage.getItem('token')
          }
        })
        this.dashboard.categoryCount = data.length
        this.categories = data
      } catch (err) {
        console.log(err);
      }

    },
    async getHistory() {
      try {
        // console.log('INI HISTORY');
        const { data } = await axios({
          method: 'GET',
          url: `${this.ORIGIN}/history`,
          headers: {
            token: localStorage.getItem('token')
          }
        })
        // console.log(data);
        this.history = data
      } catch (err) {
        console.log(err)
      }

    },
    async fillEditFormFood(id) {
      try {
        this.editFoodId = id
        const { data } = await axios({
          method: 'GET',
          url: `${this.ORIGIN}/food/${id}`,
          headers: {
            token: localStorage.getItem('token')
          }
        })
        // console.log(data)
        this.editFoodData = data
        this.switchPage('editFood')
      } catch (err) {
        console.log(err)
      }
    },
    async foodEdit(newData) {
      try {
        const { data } = await axios({
          method: 'PUT',
          url: `${this.ORIGIN}/food/${newData.id}`,
          data: {
            name: newData.name,
            description: newData.description,
            price: newData.price,
            imgUrl: newData.imgUrl,
            categoryId: newData.category,
            authorId: newData.authorId
          },
          headers: {
            token: localStorage.getItem('token')
          }
        })
        // console.log(data)
        this.getFood()
        this.switchPage('food')
        this.historyFood(data, 'put')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.name} edited successfully`,
          showConfirmButton: false,
          timer: 1850
        })
      } catch (err) {
        console.log(err)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1850
        })
      }
    },
    async foodAdd(food) {
      console.log(food);
      try {
        let { data } = await axios({
          method: 'POST',
          url: `${this.ORIGIN}/food`,
          data: {
            name: food.name,
            description: food.description,
            price: food.price,
            imgUrl: food.imgUrl,
            categoryId: food.category,
            authorId: food.authorId
          },
          headers: {
            token: localStorage.getItem('token')
          }
        })
        // console.log(newFood)
        this.getFood()
        this.switchPage('food')
        this.historyFood(data, 'post')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.name} added to food list`,
          showConfirmButton: false,
          timer: 1850
        })
      } catch (err) {
        console.log(err)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1850
        })
      }
    },
    async addCategory(category) {
      console.log(category);
      try {
        let { data } = await axios({
          method: 'POST',
          url: `${this.ORIGIN}/categories`,
          data: {
            name: category
          },
          headers: {
            token: localStorage.getItem('token')
          }
        })
        this.getCategories()
        this.historyCategory(data.id, 'post')
        this.switchPage('category')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.name} added to category list`,
          showConfirmButton: false,
          timer: 1850
        })
      } catch (err) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1850
        })
        console.log(err)
      }
    },
    async editCategory(id) {
      //filling category form
      try {
        // console.log('masuk <<<<<<<', id)
        this.editCategoryId = id
        let { data } = await axios({
          method: 'GET',
          url: `${this.ORIGIN}/categories/${id}`,
          headers: {
            token: localStorage.getItem('token')
          }
        })
        // console.log(data)
        this.editCategoryData = data
        this.switchPage('editCategory')
      } catch (err) {
        console.log(err)
      }
    },
    async submitEditCategory(category) {
      //patching data to db
      try {
        let { data } = await axios({
          method: 'PATCH',
          url: `${this.ORIGIN}/categories/${this.editCategoryId}`,
          headers: {
            token: localStorage.getItem('token')
          },
          data: {
            name: category
          }
        })
        console.log(data)
        this.getCategories()
        this.historyCategory(data.id, 'patch')
        //this.historyCat
        this.switchPage('category')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.name} edited successfully`,
          showConfirmButton: false,
          timer: 1850
        })
      } catch (err) {
        console.log(err)
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `${err.response.data.message}`,
          showConfirmButton: false,
          timer: 1850
        })
      }
    },
    async deleteCategory(id) {
      // console.log(id, '<<<<<<<<<<<<<');
      try {
        this.historyCategory(id, 'delete')
        let { data } = await axios({
          method: 'DELETE',
          url: `${this.ORIGIN}/categories/${id}`,
          headers: {
            token: localStorage.getItem('token')
          }
        })
        // console.log(data);
        this.getCategories()
        this.switchPage('category')
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.name} deleted from list`,
          showConfirmButton: false,
          timer: 1850
        })
      } catch (err) {
        console.log(err)
      }
    },
    async statusChange(value) {
      try {
        this.historyFood(value, 'patch')
        console.log(value, '<<<<<<')
        let { data } = await axios({
          method: 'PATCH',
          url: `${this.ORIGIN}/food/${value.id}`,
          headers: {
            token: localStorage.getItem('token')
          },
          data: {
            status: value.status
          }
        })
        this.getFood()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${data.name} status has updated to ${data.status}`,
          showConfirmButton: false,
          timer: 1850
        })
      } catch (err) {
        console.log(err)
      }
    },
    async historyFood(food, type) {
      try {
        let history = await axios({
          method: 'POST',
          url: `${this.ORIGIN}/food/history/${food.id}`,
          data: {
            status: food.status,
            type: type,
          },
          headers: {
            token: localStorage.getItem('token')
          }
        })
        this.getHistory()
        // console.log('histury created');
      } catch (err) {
        console.log(err)
      }
    },
    async historyCategory(categoryId, type) {
      try {
        let history = await axios({
          method: 'POST',
          url: `${this.ORIGIN}/categories/history/${categoryId}`,
          data: {
            type: type,
          },
          headers: {
            token: localStorage.getItem('token')
          }
        })
        this.getHistory()
      } catch (err) {
        console.log(err)
      }
    },
    async googleLogin(response) {
      // console.log(response, 'INI RESP');
      try {
        let { data } = await axios({
          method: 'POST',
          url: `${this.ORIGIN}/google-sign-in`,
          headers: {
            token: response.credential
          }
        })
        localStorage.setItem('token', data.token)
        localStorage.setItem('username', data.username)
        localStorage.setItem('userId', data.userId)
        localStorage.setItem('role', data.role)
        this.getFood()
        this.getCategories()
        this.getHistory()
        this.currentPage = 'dashboard'
        this.username = localStorage.getItem('username')
        // console.log(data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Succes login!',
          showConfirmButton: false,
          timer: 1850
        })
      } catch (err) {
        console.log(err)
      }
    },
    async logger(id) {
      console.log(id, '<<<<');
    },
    async logout() {
      Swal.fire({
        title: 'Are you sure?',
        text: "You are going to log out",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Logged out!',
            '',
            'success'
          )
        }
        localStorage.clear()
        this.switchPage('login')
      })
    }
  }
}

</script>

<template>
  <header>
    <Navbar v-if="currentPage !== 'login' && currentPage !== 'register'" @switchPage="switchPage" :username="username"
      @logout="logout" />
  </header>

  <main>
    <Login v-if="currentPage === 'login'" @login="login" @switchPage="switchPage" @googleLogin="googleLogin" />

    <Register v-if="currentPage === 'register'" @switchPage="switchPage" @register="register" />

    <Dashboard v-if="currentPage === 'dashboard'" :data="dashboard" />

    <Food v-if="currentPage === 'food'" @switchPage="switchPage" @changeEditId="fillEditFormFood"
      @statusChange="statusChange" :food="food" />

    <Category v-if="currentPage === 'category'" @switchPage="switchPage" :categories="categories"
      @deleteCategory="deleteCategory" @editCategory="editCategory" />

    <Logs v-if="currentPage === 'log'" :history="history" />

    <AddFood v-if="currentPage === 'addFood'" :categories="categories" @submitForm="foodAdd" @switchPage="switchPage" />

    <EditFood v-if="currentPage === 'editFood'" :editFoodData="editFoodData" :categories="categories"
      @submitForm="foodEdit" @switchPage="switchPage" />

    <AddCategory v-if="currentPage === 'addCategory'" @submitCategory="addCategory" @switchPage="switchPage" />

    <EditCategory v-if="currentPage === 'editCategory'" :editCategoryData="editCategoryData" @switchPage="switchPage"
      @submitCategory="submitEditCategory" />
    <!-- <TableRowFood @switchPage="switchPage" /> -->
  </main>
</template>

<style scoped></style>
