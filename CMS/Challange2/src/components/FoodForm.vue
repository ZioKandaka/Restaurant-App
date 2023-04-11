<script>
export default {
    props: ['categories', 'editFoodData', 'buttonName'],
    emits: ['submitForm', 'switchPage'],
    data() {
        return {
            id: 0,
            name: '',
            category: '',
            description: '',
            price: null,
            imgUrl: '',
            authorId: localStorage.getItem('userId')
        }
    },
    // watch: {
    //     editFoodData(val) {
    //         this.id = val.id
    //         this.name = val.name
    //         this.category = this.categories.id
    //         this.description = val.description
    //         this.price = val.price
    //         this.imgUrl = val.imgUrl
    //         this.authorId = val.authorId
    //     }
    // },
    created() {
        if (this.editFoodData) {
            this.id = this.editFoodData.id
            this.name = this.editFoodData.name
            this.category = this.editFoodData.categoryId
            this.description = this.editFoodData.description
            this.price = this.editFoodData.price
            this.imgUrl = this.editFoodData.imgUrl
        }
    },
    methods: {
        submitForm(newData) {
            this.$emit('submitForm', newData)
        },
        switchPage(to) {
            this.$emit('switchPage', to)
        }
    }
}
</script>

<template>
    <div class="flex justify-center w-4/6 h-3/6 items-center">
        <form @submit.prevent="submitForm({
            id: this.id,
            name: this.name,
            category: this.category,
            description: this.description,
            price: this.price,
            imgUrl: this.imgUrl,
            authorId: this.authorId
        })" class="flex flex-col justify-center w-5/6">
            <label for="new-food-name">Name</label>
            <input type="text" name="new-food-name" id="new-food-name" class="input input-bordered input-info w-full"
            v-model="name">

            <label for="new-food-category">Category</label>
            <select v-model="category" name="new-food-category" id="new-food-category" class="select select-info w-full">
                <option v-if="!editFoodData" value="" selected hidden disabled>Select category</option>
                <option :value="kategori.id" v-for="(kategori, i) in categories" :key="kategori.id">{{ kategori.name }}</option>
            </select>

            <label for="new-food-description">Description</label>
            <input type="text" name="new-food-description" id="new-food-description"
                class="input input-bordered input-info w-full" v-model="description">

            <label for="new-food-price">Price</label>
            <input type="text" name="new-food-price" id="new-food-price" class="input input-bordered input-info w-full"
                v-model="price">

            <label for="new-food-imgUrl">Image</label>
            <input type="text" name="new-food-imgUrl" id="new-food-imgUrl" class="input input-bordered input-info w-full"
                v-model="imgUrl">
            <div class="flex justify-center items-center">
                <div style="margin: 20px;">
                    <button @click="switchPage('food')" type="button" class="btn btn-error bg-red-400">Cancel</button>
                </div>
                <div style="margin: 20px;">
                    <button class="btn btn-info bg-cyan-400" type="submit">{{ buttonName }}</button>
                </div>
            </div>
        </form>
    </div>
    <!-- <div>
                        <p>{{ editFoodData }}</p>
                    </div> -->
</template>

<style></style>