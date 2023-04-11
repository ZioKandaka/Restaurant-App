<script>
import { mapActions } from 'pinia'
import { useRestaurantStore } from '../stores/restaurant';
export default {
    methods: {
        ...mapActions(useRestaurantStore, ['register'])
    },
    
    data() {
        return {
            username: '',
            email: '',
            password: '',
            phoneNumber: '',
            address: ''
        }
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
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <form @submit.prevent="register({
                username: username,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                address: address
            })" class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>

                <input v-model="username" type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="username"
                    placeholder="Username" />

                <input v-model="email" type="text" class="block border border-grey-light w-full p-3 rounded mb-4" name="email"
                    placeholder="Email" />

                <input v-model="password" type="password" class="block border border-grey-light w-full p-3 rounded mb-4" name="password"
                    placeholder="Password" />

                <input v-model="phoneNumber" type="text" class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="phoneNumber" placeholder="Phone Number" />

                <input v-model="address" type="text" class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="address" placeholder="Address" />

                <button type="submit"
                    class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-700 focus:outline-none my-1">Create
                    Account</button>

                <div class="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                    </a> and
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
            </form>

            <div class="text-grey-dark mt-6">
                Already have an account?
                <RouterLink to="/login" class="btn btn-active btn-xs" >
                    Log in
                </RouterLink>.
            </div>
        </div>
    </div>
</template>