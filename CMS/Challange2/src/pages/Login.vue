<script>
export default {
    emits: ['login', 'switchPage', 'googleLogin'],
    methods: {
        login() {
            this.$emit('login', this.email, this.password)
        },
        switchPage(to) {
            this.$emit('switchPage', to)
        },
        googleLogin(response) {
            // this.log = response
            this.$emit('googleLogin', response)
        },
    },

    data() {
        return {
            email: '',
            password: '',
            log: ''
        }
    }
}
</script>

<template>
    <div class="flex justify-center items-center bg-local bg-repeat h-screen w-screen bg-center bg-slate-300"
        id="login-head" style=" background-image: url(./assets//istockphoto-515373062-612x612.jpg)">
        <div class="h-4/6 w-2/6 bg-white drop-shadow-sm flex justify-center items-center"
            style="padding: 50px;  border-radius: 20px 0px 0px 25px;">
            <!-- insert resto pic -->
            <img src="../../public/leesport.png" alt="food picture"
                style="width: 500px; padding-left: 10px; padding-top: 20px;">
        </div>
        <div class="h-4/6 w-2/6 bg-gradient-to-r bg-slate-700"
            style="padding: 50px; padding-left: 80px; border-radius: 0px 20px 20px 0px;">
            <div
                style="color: white; font-weight: bold; font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size:xx-large; margin-bottom: 20px;">
                <h2>Login</h2>
            </div>
            <div id="login-form" class="">
                <label for="username"
                    style="color: white; font-weight: bold; font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size:large;">E-mail</label><br>
                <input class="input input-bordered input-primary w-full max-w-xs" type="text" name="username" id="username"
                    v-model="email">
                <br>
                <label for="password"
                    style="color: white; font-weight: bold; font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size:large;">Password</label><br>
                <input class="input input-bordered input-primary w-full max-w-xs" type="password" name="password"
                    id="password" v-model="password"><br>
                <button class="btn btn-md btn-accent w-32" style="margin-top: 20px;" @click.prevent="login()">Login</button>
            </div>
            <div style="color: white; margin-top: 10px;">
                <p>Don't have account?</p>
                <button @click="switchPage('register')" class="btn btn-xs btn-accent" style="margin-top: 10px;">Sign Up
                here</button>
        </div>
        <div class="mt-5">
            <GoogleLogin :callback="googleLogin" prompt />
        </div>
    </div>
</div></template>

<style></style>