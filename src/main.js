import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './pages/home'

const routes = [
    {path: '/', component: HomePage}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})



const VueApp = createApp(App)
VueApp.use(router)

VueApp.mount('#app')
