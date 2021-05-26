<template>
    <div class="insurance-calculation">
        {{ getTotal }}
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
