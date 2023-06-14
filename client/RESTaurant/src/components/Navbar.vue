<script>
    import {mapActions, mapState} from 'pinia'
    import {useRestaurantStore} from '../stores/restaurant'
    export default {
        methods: {
            ...mapActions(useRestaurantStore, ['logout'])
        },

        computed: {
            ...mapState(useRestaurantStore, ['username', 'isLogin'])
        }
    }
</script>

<template>
    <div class="flex justify-center h-20 mb-4" >
        <div class="navbar bg-gradient-to-tr from-slate-700 to-blue-900 text-neutral-content justify-between">
            <div>
                <RouterLink to="/" class="btn btn-ghost normal-case text-xl ml-10 outline-white outline-2 outline-none">RESTaurant</RouterLink> 
            </div>
            <div>
                <div class="mr-16">
                    <div v-if="username" class="btn btn-ghost normal-case text-xl ml-10 bg-white text-black" >Hallo, {{ username }}!</div> 
                    <RouterLink to="/" class="btn btn-ghost normal-case text-xl ml-10">Home</RouterLink> 
                    <RouterLink to="/favorites" class="btn btn-ghost normal-case text-xl ml-10">Favorites</RouterLink> 
                </div>
                <div class="mr-8">
                    <button @click.prevent="logout" class="btn btn-error bg-red-400 normal-case text-xl ml-10">Logout</button> 
                </div>
                <!-- <div class="mr-8">
                    <RouterLink to="/login" class="btn btn-info normal-case text-xl ml-10">Login</RouterLink> 
                </div> -->
            </div>
        </div>
        
    </div>
</template>