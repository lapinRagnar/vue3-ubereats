import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import HomePage from './pages/home'
import RestaurantPage from './pages/Restaurant'

const routes = [
    {path: '/', component: HomePage},
    {path: '/restaurant', component: RestaurantPage},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})



const VueApp = createApp(App)
VueApp.use(router)

VueApp.mount('#app')
