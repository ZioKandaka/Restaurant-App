<script>
    import { mapState, mapActions, mapWritableState } from 'pinia'
    import { useRestaurantStore } from '../stores/restaurant'
    export default {
        // data() {
        //     return {
        //         search: null,
        //         minPrice: null,
        //         maxPrice: null
        //     }
        // },
        computed: {
            ...mapWritableState(useRestaurantStore, ['search', 'minPrice', 'maxPrice', 'page'])
        },
        methods: {
            ...mapActions(useRestaurantStore, ['fetchFood', 'clear'])
        }


    }
</script>

<template>
    <form @submit.prevent="fetchFood({
                search: search,
                minPrice: minPrice,
                maxPrice: maxPrice,
                page: 1
            })" 
            class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 m-10">
        <div class="card-body">
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Food Name</span>
                </label>
                <input v-model="search" type="text" placeholder="food name" class="input input-bordered" />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Maximum Price</span>
                </label>
                <input v-model="maxPrice" type="number" placeholder="maximum price" class="input input-bordered" />
            </div>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Minimum Price</span>
                </label>
                <input v-model="minPrice" type="number" placeholder="minimum price" class="input input-bordered" />
            </div>
            <div class="form-control mt-6">
                <button type="sub" class="btn btn-primary">Search</button>
                <button @click.prevent="clear" type="button" class="btn btn-primary bg-green-700 mt-5">Clear Search</button>
            </div>
        </div>
    </form>
</template>