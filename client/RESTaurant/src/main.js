import { createApp, markRaw } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login';


// import './assets/main.css'
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {
    clientId: '941736208536-snm23rd97s32753hgrilgpcmd5o3qi0p.apps.googleusercontent.com'
})

pinia.use(({store}) => {
    store.router = markRaw(router)
})

app.mount('#app')
