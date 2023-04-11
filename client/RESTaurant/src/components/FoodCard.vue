<script>
    import {mapActions} from 'pinia'
    import {useRestaurantStore} from '../stores/restaurant';
    export default {
        props: ['food', 'buttonName'],
        data() {
            return {
                foodId: this.food.id
            }
        },
        methods: {
            ...mapActions(useRestaurantStore, ['postFoodToFavorites', 'foodDetail'])
        }
    }
</script>

<template>
    <div class="hover:cursor-pointer hover:scale-105 card bg-base-100 shadow-xl w-80  m-4 duration-100">
        <figure @click.prevent="foodDetail(food.id)"><img class="object-cover w-96 h-80" :src="food.imgUrl" alt="Shoes" /></figure>
        <div @click.prevent="foodDetail(food.id)" class="card-body">
            <div class="flex justify-between">
                <h2 class="card-title">{{ food.name }}</h2>
                <h2 class="badge badge-outline mt-2">{{ food.Category.name}}</h2>
            </div>
            <h3 class="font-semibold">{{ food.price }}</h3>
            <p>{{ food.description }}</p>
        </div>
        <div class="card-actions justify-end pr-8 pb-5">
            <button @click.prevent="postFoodToFavorites(foodId)" class="btn btn-secondary">{{ buttonName }}</button>
            <!-- <button class="btn">Details</button> -->
        </div>
    </div>

</template>