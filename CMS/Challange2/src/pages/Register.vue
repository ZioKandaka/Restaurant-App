<script>
    export default {
        props: [],
        emits: ['switchPage', 'register'],
        data() {
            return {
                username: '',
                email: '',
                password: '',
                phoneNumber: null,
                address: ''
            }
        },
        methods: {
            switchPage(to) {
                this.$emit('switchPage', to)
            },
            register(newAccount) {
                this.$emit('register', newAccount)
            }
        }
    }
</script>

<template>
    <div id="main" class="flex justify-center items-center h-screen w-screen bg-local bg-slate-300">
            <div id="left" class="h-4/6 w-1/6 flex justify-center items-center bg-local rounded-tl-tb-lg" style="border-radius: 25px 0px 0px 25px;">
                <!-- <img src="" alt="logo restaurant" style=""> -->
            </div>
            <div class="flex-col h-4/6 w-4/6 flex justify-center bg-slate-700 text-white p-3" style="border-radius: 0px 25px 25px 0px;">
                <div class="pb-6 pl-5 text-4xl font-bold ml-24">
                    <h2>Register</h2>
                </div>
                <div class="text-lg" style="margin-left: 118px;">
                    <h3>Manage all your foods efficiently</h3>
                </div>
                <div class="text-lg mb-5" style="margin-left: 118px;">
                    <p>Let's get all you set up so you can verify your personal account and begin managing our RESTaurant</p>
                </div>
                <div>
                    <form @submit.prevent="register({
                        username: username,
                        email: email,
                        password: password,
                        phoneNumber: phoneNumber,
                        address: address
                    })">
                        <div style="display: flex; justify-content: space-evenly;">
                            <div>
                                <label for="username-register">Username</label><br>
                                <input v-model="username" class="input input-bordered input-primary w-80 text-black" type="text" name="username-register" id="username-register"><br>
    
                                <label for="email-register">Email</label><br>
                                <input v-model="email" class="input input-bordered input-primary w-full max-w-xs text-black" type="text" name="email-register" id="email-register"><br>
    
                                <label for="password-register">Password</label><br>
                                <input v-model="password" class="input input-bordered input-primary w-full max-w-xs text-black" type="password" name="password-register" id="password-register"><br>
                            </div>
                            <div>
                                <label  for="phoneNumber-register">Phone Number</label><br>
                                <input v-model="phoneNumber" class="input input-bordered input-primary w-full max-w-xs text-black" type="text" name="phoneNumber-register" id="phoneNumber-register"><br>
    
                                <label for="address-register">Address</label><br>
                                <textarea v-model="address" class="textarea textarea-primary text-black" name="address-register" id="address-register" cols="26" rows="3"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-accent bg-teal-400 btn-sm m-3" style="margin-left: 153px; margin-top: 20px;">Register</button>
                    </form>
                </div>
                <div class="" style="margin-left: 155px;">
                    <p>Already have an account? 
                        <button  class="btn btn-accent btn-xs" @click="switchPage('login')" >Log in</button></p>
                </div>
            </div>
        </div>
</template>

<style>

    #left {
        background-image: url("/leftRegis.jpg");
    }
</style>