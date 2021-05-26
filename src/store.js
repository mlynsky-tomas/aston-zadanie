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
    },
    getters: {
        getTotal: state => {
            let balik = 0, pripoistenia = 1, daysTotal = 0, total, errorMsg = ""
            switch (state.balik) {
                case "ZAKLADNY":
                    balik = state.variant === "KCP" ? 1.2 : 39
                    break
                case "ROZSIRENY":
                    balik = state.variant === "KCP" ? 1.8 : 49
                    break
                case "EXTRA":
                    balik = state.variant === "KCP" ? 2.4 : 59
                    break
                default:
                    balik = 0
            }
            pripoistenia = state.variant === "KCP" ? 
                state.pripoistenia.includes("STORNO") ? 
                    pripoistenia * 1.5 : 
                    pripoistenia : 
                state.pripoistenia.includes("STORNO") ? 
                    pripoistenia * 1.2 : 
                    pripoistenia
            pripoistenia = state.variant === "KCP" ? 
                state.pripoistenia.includes("SPORT") ? 
                    pripoistenia * 1.3 : 
                    pripoistenia : 
                state.pripoistenia.includes("SPORT") ? 
                    pripoistenia * 1.1 : 
                    pripoistenia
            daysTotal = (new Date(state.koniecPoistenia).getTime() - new Date(state.zaciatokPoistenia).getTime())/(3600000*24)
            errorMsg !== "" ? 
                total = errorMsg : 
                state.variant === "KCP" ? 
                    total = `Suma poistenia: ${(balik * pripoistenia * state.pocetOsob * daysTotal).toFixed(2)}€` :
                    total = `Suma poistenia: ${(balik * pripoistenia * state.pocetOsob).toFixed(2)}€`
                
            return total
        }
    }
})

export default store