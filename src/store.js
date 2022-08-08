import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        basket: [],
    },
    mutations: {
        SET_BASKET(state, value) {
            state.basket = value 
        },
            
    },
    actions: {
        addToBasket({commit}, value) {
            commit('SET_BASKET', value)
        },
    },
    getters: {
        getBasket: state => state.basket
    }
})