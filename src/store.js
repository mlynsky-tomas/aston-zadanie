import Vue from 'vue'
import Vuex from 'vuex'
import { getUIDate, convertDate } from './utils.js'

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
            console.log(element);
            if(element.name === "zaciatokPoistenia" && state.koniecPoistenia <= element.value){ 
                let koniecPoistenia = new Date(element.value)
                koniecPoistenia.setDate(koniecPoistenia.getDate() + 1)
                state.koniecPoistenia = convertDate(getUIDate(koniecPoistenia))
                console.log(state);
            }
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
            daysTotal = (new Date(convertDate(state.koniecPoistenia)).getTime() - new Date(convertDate(state.zaciatokPoistenia)).getTime())/(3600000*24)
            errorMsg !== "" ? 
                total = errorMsg : 
                state.variant === "KCP" ? 
                    total = `Suma poistenia: ${(balik * pripoistenia * state.pocetOsob * daysTotal).toFixed(2)}€` :
                    total = `Suma poistenia: ${(balik * pripoistenia * state.pocetOsob).toFixed(2)}€`
                
            return total
        },
        getDisabled: (state) => {
            let disabled = {
                zaciatokPoistenia: true,
                koniecPoistenia: true,
                balik: true,
                pocetOsob: true,
                pripoistenia: true    
            }
            disabled.zaciatokPoistenia = state.variant !== "" ? false : true
            disabled.koniecPoistenia = state.variant === "KCP" && state.zaciatokPoistenia !== "" ? false : true
            disabled.balik = (state.variant === "KCP" && state.koniecPoistenia !== "") || (state.variant === "CCP" && state.zaciatokPoistenia !== "") ? false : true
            disabled.pocetOsob = state.balik !== "" ? false : true
            disabled.pripoistenia = state.balik !== "" ? false : true
            return disabled
        },
        getZaciatokPoistenia: (state) => {
            return new Date(convertDate(state.zaciatokPoistenia))
        },
        getValue: (state) => {
            let zaciatokPoistenia, koniecPoistenia
            zaciatokPoistenia = new Date(convertDate(state.zaciatokPoistenia))
            koniecPoistenia = new Date(convertDate(state.koniecPoistenia))
            if(zaciatokPoistenia >= koniecPoistenia) {
                let newDateKoniec = new Date(convertDate(state.zaciatokPoistenia))
                newDateKoniec.setDate(newDateKoniec.getDate() + 1)
                state.koniecPoistenia = getUIDate(newDateKoniec)
            }
            return state
        }
    }
})

export default store