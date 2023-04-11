import { defineStore } from 'pinia'
import axios from 'axios';
import Swal from 'sweetalert2'
export const useRestaurantStore = defineStore('restaurant', {
    state: () => ({ 
        ORIGIN: 'https://restaurant-challange3.up.railway.app/pub',
        food: [],
        favorites: [],
        search: null,
        minPrice: null,
        maxPrice: null,
        page: 1,
        foodCount: 0,
        numberOfPages: null,
        detail: {},
        QR: null,
        username: null,
        isLogin: null
    }),

    created() {
        if(localStorage.getItem('username')) {
            this.username = localStorage.getItem('username')
        }
    },

    getters: {

    },
    actions: {
        async fetchFood(input) {
            try {
                let pushRoute = `home`
                //new life
                if(input?.page) {
                    this.page = input?.page
                    pushRoute += `?page=${input?.page}`
                } else {
                    pushRoute += `?page=${this.page}`
                }
                if(input?.search) {
                    this.search = input?.search
                    pushRoute += `&search=${input?.search}`
                }
                if(input?.minPrice) {
                    this.minPrice = input?.minPrice
                    pushRoute += `&minPrice=${input?.minPrice}`
                }
                if(input?.maxPrice) {
                    this.maxPrice = input?.maxPrice
                    pushRoute += `&maxPrice=${input?.maxPrice}`
                }

                const { data } = await axios({
                    method: 'GET',
                    url: `${this.ORIGIN}/food`,
                    params: {
                        page: this.page,
                        minPrice: this.minPrice,
                        maxPrice: this.maxPrice,
                        search: this.search
                    }
                })
                // console.log(fetchURl, "=====");
                this.food = data
                this.foodCount = data.count
                this.numberOfPages = Math.ceil(data.count / 9)
                console.log(data.count);

                this.router.push(`${pushRoute}`)

                console.log(this.search, this.minPrice, this.maxPrice, this.page, this.foodCount, data.rows.length, this.numberOfPages, '+++')

            } catch (err) {
                console.log(err)
            }
        },

        async fetchFavorites() {
            try {
                let customerId = localStorage.getItem('userId')
                
                const {data} = await axios({
                    method: 'GET',
                    url: `${this.ORIGIN}/favorites/${customerId}`,
                    headers: {
                        token: localStorage.getItem('access_token')
                    }
                })
                // console.log(data, 'MASUK FAV');
                // console.log(data, 'FAV')
                this.favorites = data
            } catch (err) {
                console.log(err)
            }
        },

        async postFoodToFavorites(foodId) {
            try {
                // console.log(foodId, '++++++');
                if(!localStorage.getItem('access_token')) {
                    throw {name: 'loginRequired'}
                }
                let userId = localStorage.getItem('userId')
                const { data } = await axios({
                    method: 'POST',
                    url: `${this.ORIGIN}/favorites/${userId}/${foodId}`,
                    headers: {
                        token: localStorage.getItem('access_token')
                    }
                })
                // console.log(data, '+_+_');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Food added to favorite',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.fetchFavorites()
            } catch (err) {
                if(err.name === 'loginRequired') {
                    this.router.push('/login')
                    Swal.fire({
                        position: 'top-end',
                        icon: 'warning',
                        title: `Please login`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                console.log(err)
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `${err.response.data.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        },

        async foodDetail(foodId) {
            // console.log(foodId)
            try {
                let { data } = await axios({
                    method: 'GET',
                    url: `${this.ORIGIN}/food/${foodId}`,
                    headers: {
                        token: localStorage.getItem('access_token')
                    }
                })
                this.generateQR(foodId)
                // console.log(data, '()()')
                this.detail = data
                this.router.push(`/detail/${foodId}`)
            } catch (err) {
                console.log(err)
            }
        },

        async generateQR(id) {
            try {
                let response = await axios({
                    method: 'GET',
                    url: `${this.ORIGIN}/QR/${id}`,
                    data: {
                        "frame_name": "no-frame",
                        "qr_code_text": "https://leesport-5e9f1.web.app/",
                        "image_format": "SVG",
                        "qr_code_logo": "scan-me-square"
                    }
                })
                console.log(response, 'QR +++')
                this.QR = response.data
            } catch (err) {
                
            }
        },

        async clear() {
            try {
                this.search = null
                this.minPrice = null
                this.maxPrice = null
                this.page = 1
                this.fetchFood()
            } catch (err) {
                console.log(err)
            }
        },

        async login(input) {
            try {
                // console.log(input, '++');
                const {data} = await axios({
                    method: 'POST',
                    url: `${this.ORIGIN}/login`,
                    data: input
                })
                // console.log(data, 'PPP')
                localStorage.setItem('access_token', data.token)
                localStorage.setItem('userId', data.userId)
                localStorage.setItem('role', data.role)
                localStorage.setItem('username', data.username)
                this.username = data.username
                this.router.push('/home')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Success login!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            } catch (err) {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: `${err.response.data.message}`
                  })
            }
        },

        async logout() {
            try {
                localStorage.clear()
                this.username = ''
                this.router.push('/login')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Logged out',
                    showConfirmButton: false,
                    timer: 1500
                })
            } catch (err) {
                console.log(err)
            }
        },

        async register(input) {
            try {
                // console.log(input, '()()()()()');
                let response = await axios({
                    method: 'POST',
                    url: `${this.ORIGIN}/register`,
                    data: {
                        username : input.username,
                        email: input.email,
                        password : input.password,
                        phoneNumber : input.phoneNumber,
                        address : input.address 
                    }
                })
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Register success!',
                    text: 'Please login',
                    showConfirmButton: false,
                    timer: 1500
                })
                // console.log(response)
            } catch (err) {
                console.log(err)
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `${err.response.data.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        },

        async googleLogin(response) {
            // console.log(response, 'INI INI');
            try {
                let { data } = await axios({
                  method: 'POST',
                  url: `${this.ORIGIN}/google-sign-in`,
                  headers: {
                    token: response.credential
                  }
                })
                localStorage.setItem('access_token', data.token)
                localStorage.setItem('userId', data.userId)
                localStorage.setItem('role', data.role)
                localStorage.setItem('username', data.username)
                this.username = data.username
                this.router.push('/home')
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Success login!',
                    showConfirmButton: false,
                    timer: 1500
                  })
              } catch (err) {
                console.log(err)
              }
        }
    },
  })
  