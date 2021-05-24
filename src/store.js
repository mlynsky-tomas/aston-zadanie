import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        variant: null
    },
    mutations: {
        updateForm(state, element) {
            state[element.name] = element.value
        }
    }
})

export default store