import  Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from './modules/main/Main-page.vue'
import Products from './modules/food/Food-page.vue'
import Basket from './modules/basket/basket-page.vue'
import FoodCard from './modules/main/components/Food-card.vue'
import Delivery from './modules/delivery/delivery-page.vue'
import Condition from './modules/condition/condition-page.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/products',
            name: 'products',
            component: Products
        },
        {
            path: '/basket',
            name: 'basket',
            component: Basket
        },
        {
            path: '/food-card',
            name: 'food-card',
            component: FoodCard
        },
        {
            path: '/food-card/:id',
            name: 'food-card',
            component: FoodCard
        },
        {
            path: '/delivery',
            name: 'delivery',
            component: Delivery
        },
        {
            path: '/condition',
            name: 'condition',
            component: Condition
        }
    ]
})