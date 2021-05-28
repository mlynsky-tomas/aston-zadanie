<template>
    <div class="insurance-verification">
        <div v-if="total !== null">
            Odpoveď z API:  {{ total }}€
        </div>
        <md-button class="md-primary" :disabled="getTotal == 0.00 || disabled" @click="verify">Overiť s API</md-button>
    </div>
</template>

<script>
import { mapGetters } from "vuex"
import { convertDate } from "../utils.js"

export default {
    name: 'InsuranceVerification',
    data: () => ({
        total: null,
        disabled: false
    }),
    methods: {
        verify: async function() {
            let store = { ...this.$store.state }
            store.zaciatokPoistenia = store.zaciatokPoistenia !== null ? convertDate(store.zaciatokPoistenia) : null
            store.koniecPoistenia = store.koniecPoistenia !== null ? convertDate(store.koniecPoistenia) : null
            if (store.variant === "CCP"){
                delete store.zaciatokPoistenia
                delete store.koniecPoistenia
            }
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...store })
            }
            this.disabled = true
            const response = await fetch('https://zadanie.ready.aston.sk/calculate', requestOptions)
            const total = await response.json()
            this.total = total
            this.disabled = false
        }
    },
    computed: {
        ...mapGetters(["getTotal"])
    }
}
</script>
