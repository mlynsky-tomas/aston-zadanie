import Vue from 'vue'
import Vuex from 'vuex'
import { convertDate } from './utils.js'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        variant: "",
        zaciatokPoistenia: null,
        koniecPoistenia: null,
        balik: "",
        pocetOsob: null,
        pripoistenia: []
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
                    pripoistenia + 0.5 : 
                    pripoistenia : 
                state.pripoistenia.includes("STORNO") ? 
                    pripoistenia + 0.2 : 
                    pripoistenia
            pripoistenia = state.variant === "KCP" ? 
                state.pripoistenia.includes("SPORT") ? 
                    pripoistenia + 0.3 : 
                    pripoistenia : 
                state.pripoistenia.includes("SPORT") ? 
                    pripoistenia + 0.1 : 
                    pripoistenia
            daysTotal = 
                state.zaciatokPoistenia !== null && state.koniecPoistenia !== null ?
                    (new Date(convertDate(state.koniecPoistenia)).getTime() - new Date(convertDate(state.zaciatokPoistenia)).getTime())/(3600000*24) + 1 :
                    0
            errorMsg !== "" ? 
                total = errorMsg : 
                state.variant === "KCP" ? 
                    total = (balik * pripoistenia * state.pocetOsob * daysTotal).toFixed(2) :
                    total = (balik * pripoistenia * state.pocetOsob).toFixed(2)
                
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
            disabled.zaciatokPoistenia = state.variant === "KCP" && state.variant !== "" ? false : true
            disabled.koniecPoistenia = state.variant === "KCP" && state.zaciatokPoistenia !== null ? false : true
            disabled.balik = (state.variant === "KCP" && state.koniecPoistenia !== null) || (state.variant === "CCP" && state.variant !== "") ? false : true
            disabled.pocetOsob = state.balik !== "" && !disabled.balik ? false : true
            disabled.pripoistenia = state.balik !== "" && !disabled.balik ? false : true
            return disabled
        },
        getZaciatokPoistenia: (state) => {
            let zaciatokPoistenia 
            zaciatokPoistenia =
                state.zaciatokPoistenia !== null ?
                    new Date(convertDate(state.zaciatokPoistenia)) :
                    null
            return zaciatokPoistenia
        },
        getValue: (state) => {
            let zaciatokPoistenia, koniecPoistenia
            zaciatokPoistenia = state.zaciatokPoistenia ? new Date(convertDate(state.zaciatokPoistenia)) : null
            koniecPoistenia = state.koniecPoistenia ? new Date(convertDate(state.koniecPoistenia)) : null
            if(zaciatokPoistenia > koniecPoistenia && state.zaciatokPoistenia !== null  && state.koniecPoistenia !== null) {
                state.koniecPoistenia = state.zaciatokPoistenia
            }
            return state
        }
    }
})

export default store