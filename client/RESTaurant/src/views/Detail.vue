<script>
import {mapActions, mapState} from 'pinia'
import {useRestaurantStore} from '../stores/restaurant'
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
    export default {
        components: {
            Navbar,
            Footer
        },
        methods: {
            ...mapActions(useRestaurantStore,['foodDetail', 'generateQR'])
        },

        computed: {
            ...mapState(useRestaurantStore, ['detail', 'QR'])
        },

        created() {
            if(this.$route.params) {
                // console.log(this.$route.params);
                this.foodDetail(this.$route.params.id)
            }
            this.generateQR()
        }
    }
</script>

<template>
    <div class="min-h-scree">
        <Navbar />
        <div class="" style="min-height: 570px;">
            <div class="flex justify-center font-semibold text-5xl mb-5">
                <h1>{{ detail.name }} Detail</h1>
            </div>
            <div class="flex justify-start ml-8">
                <div class="w-2/6">
                    <img class="w-full rounded-2xl" :src="detail.imgUrl" alt="foodPic">
                </div>
                <div class="w-2/6  text-2xl ml-8 pl-10">
                    <h2>Food Name:</h2>
                    <p>{{ detail.name }}</p><br>
    
                    <h2>Food Category:</h2>
                    <p>{{ detail.Category.name }}</p><br>
    
                    <h2>Description:</h2>
                    <p>{{ detail.description }}</p><br>
    
                    <h2>Price:</h2>
                    <p>{{ detail.price }}</p><br>
    
                    <h2>Created At:</h2>
                    <p>{{ detail.formattedTime }}</p>
    
                    <!-- <p>{{ detail }}</p> -->
                </div>
                <div class="text-2xl flex flex-col items-center">
                    <div v-html="QR"
                    class="w-96"></div>
                    <h2>Share this QR code</h2>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped>
    h2 {
        font-weight: bold;
    }
</style>