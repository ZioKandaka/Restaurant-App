<script>
    import {mapActions} from 'pinia'
    import {useRestaurantStore} from '../stores/restaurant'

    export default {
        data() {
            return {
                email: null,
                password: null
            }
        },

        methods: {
            ...mapActions(useRestaurantStore, ['login', 'googleLogin'])
        }
    }
</script>

<template>
    <div class="h-screen md:flex">
        <div
            class="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-slate-900 to-blue-900 i justify-around items-center hidden">
            <div class="max-w-lg text-center scale-110">
                <h1 class="text-white font-bold text-4xl font-sans">RESTaurant</h1>
                <p class="text-white mt-1">Welcome to our restaurant website! We offer a delicious and diverse menu of dishes that will tantalize your taste buds. Our mission is to provide an exceptional dining experience that satisfies your cravings and exceeds your expectations.</p>
            </div>
            <div class="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            <div class="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
            <form class="bg-white scale-125" @submit.prevent="login({email: email, password: password})">
                <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                <p class="text-sm font-normal text-gray-600 mb-7">Login to enjoy more features!</p>
                
                
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <input v-model="email" class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
                </div>
                <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd" />
                    </svg>
                    <input v-model="password" class="pl-2 outline-none border-none" type="password" name="" id="" placeholder="Password" />
                </div>
                <button type="submit"
                    class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login
                </button>
                

                <div>
                    <span class="text-sm font-normal text-gray-600 mb-7">
                        Don't have account?
                    </span>
                    <RouterLink to="/register"
                    class="btn btn-active btn-xs"
                    >
                        Sign Up
                    </RouterLink>
                </div>
                <div class="mt-5">
                         <GoogleLogin :callback="googleLogin" prompt />
                </div>
            </form>
        </div>
    </div>
</template>