import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '941736208536-hbftgp8in89ed5jb8gm8efjp40fdcroc.apps.googleusercontent.com'
})

app.mount('#app')