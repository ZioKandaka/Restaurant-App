<script>
    import {mapActions, mapState} from 'pinia'
    import {useRestaurantStore} from '../stores/restaurant'
    import FoodCard from '../components/FoodCard.vue';
    import Footer from '../components/Footer.vue';
    import Navbar from '../components/Navbar.vue';

    export default {
        components: {
            FoodCard,
            Footer,
            Navbar
        },

        computed: {
            ...mapState(useRestaurantStore, ['favorites']),
        },

        created() {
            // console.log(this.name)
            this.fetchFavorites()
        },

        
        methods: {
            ...mapActions(useRestaurantStore, ['fetchFavorites'])
        }



    }
</script>

<template>
    <div class="min-h-screen">
        <div>
            <Navbar />
        </div>
        <div class="flex flex-row flex-wrap justify-center w-6/6 mb-1">
            <!-- <pre>{{ favorites }}</pre> -->
            <FoodCard 
                v-for="favorite in favorites" 
                :key="favorite.id"
                :food="favorite.Food"
                :buttonName="'Delete'"
            />
        </div>
        <div>
            <Footer />
        </div>
    </div>

    
</template>