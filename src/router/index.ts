import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import CartView from '../views/CartView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import BonusesView from '../views/BonusesView.vue'
import GamesView from '../views/GamesView.vue'
import ProductView from '../views/ProductView.vue'
import MerchView from '../views/MerchView.vue'
import PromosView from '../views/PromosView.vue'
import InfoView from '../views/InfoView.vue'
import ProfileView from '../views/ProfileView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/menu',
        component: MenuView
    },

    {
        path: '/promotions',
        component: PromosView
    },
    
    {
        path: '/info',
        component: InfoView
    },

    {
        path: '/favorites',
        component: FavoritesView
    },

    {
        path: '/bonuses',
        component: BonusesView
    },

    {
        path: '/games',
        component: GamesView
    },

    {
        path: '/merch',
        component: MerchView
    },

    {
        path: '/cart',
        component: CartView
    },

    {
        path: '/profile',
        component: ProfileView
    },

    {
        path: '/product/:slug',
        component: ProductView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
}) 

export default router