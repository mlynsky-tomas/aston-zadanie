<template>
    <div class="insurance-calculation" v-if="getTotal > 0">
        Suma poistenia {{ getTotal }}€
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'InsuranceCalculation',
    computed: {
        ...mapGetters(["getTotal"])
    }
}
</script>
