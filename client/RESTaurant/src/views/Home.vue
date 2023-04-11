<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import { useRestaurantStore } from '../stores/restaurant'
import FoodCard from '../components/FoodCard.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import FilterFood from '../components/FilterFood.vue';
import PaginationButton from '../components/PaginationButton.vue';

export default {
    components: {
        FoodCard,
        Footer,
        Navbar,
        FilterFood,
        PaginationButton
    },

    data() {
        return {

        }
    },

    computed: {
        ...mapState(useRestaurantStore, ['food']),
        ...mapWritableState(useRestaurantStore, ['page', 'numberOfPages', 'foodCount']),
    },

    created() {
        // console.log(this.name)
        if (this.$route.query) {
            // console.log(this.foodDetail, '<<<');
            this.fetchFood({
                page: this.$route.query.page,
                search: this.$route.query.search,
                minPrice: this.$route.query.minPrice,
                maxPrice: this.$route.query.maxPrice
            })
        } else {
            this.fetchFood({ page: 1 })
        }

        
    },

    methods: {
        ...mapActions(useRestaurantStore, ['fetchFood'])
    }
}



</script>

<template>
    <div class="bg-slate-200 min-h-full">
        <div>
            <Navbar />
        </div>
        <!-- <div>
            <h1>Our Food</h1>
        </div> -->
        <div class="flex flex-row">
            <div class="w-2/6 sticky">
                <FilterFood />
            </div>
            <div class="flex flex-row flex-wrap justify-center w-5/6">
                <FoodCard v-for="meal in food.rows" :key="food.rows.id" :food="meal" :buttonName="'Favorite'" 
                
                />

                <div v-if="!foodCount" class="flex flex-col items-center text-3xl mb-8">
                    <img class="w-4/6 -mt-8" src="../assets/pngegg.png" alt="NotFound">
                    <h1>Sorry, we can't find any food matching your search</h1>
                    <h1>Please try another keyword</h1>
                </div>
            </div>
        </div>

        <div v-if="foodCount" class="flex justify-center">
            <PaginationButton 
            :index="page-1" 
            :buttonName="'<'"
            />
            <PaginationButton v-for="(index) in numberOfPages" 
            :index="index" 
            :buttonName="index"/>
            <PaginationButton 
            :index="(+page) +1" 
            :buttonName="'>'"
            />
        </div>
        <div>
            <Footer />
        </div>
    </div>
</template>