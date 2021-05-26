import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        variant: "",
        zaciatokPoistenia: "",
        koniecPoistenia: "",
        balik: "",
        pocetOsob: null,
        pripoistenia: []
    },
    mutations: {
        updateForm(state, element) {
            state[element.name] = element.value
        }
    }
})

export default store