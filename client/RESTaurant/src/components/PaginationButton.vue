<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useRestaurantStore } from '../stores/restaurant';
export default {
    computed: {
        ...mapWritableState(useRestaurantStore, ['page', 'search', 'minPrice', 'maxPrice']),

        buttonClass() {
            if(this.page == this.index) {
            return "flex justify-center items-center bg-sky-500 text-white w-12 h-12 m-2 rounded-2xl"
            } else {
                return "flex justify-center items-center bg-sky-900 text-white w-12 h-12 m-2 rounded-2xl"
            }
        }
    },
    props: ['index', 'buttonName'],
    methods: {
        ...mapActions(useRestaurantStore, ['fetchFood'])
    }
}
</script>

<template>
    <button @click.prevent="fetchFood({
        search: search,
        minPrice: minPrice,
        maxPrice: maxPrice,
        page: index
    })">
        <div :class="buttonClass">
            {{ buttonName }}
        </div>
    </button>
</template>