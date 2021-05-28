<template>
  <div>
    <md-datepicker v-model="getValue[id]" :md-disabled-dates="disabledDates" :md-model-type="String" md-immediately>
      <label>{{ label }}</label>
    </md-datepicker>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'DateWrapper',
    props: {
        label: String,
        id: String,
        disabledDates: Function
    },
    computed: {
        ...mapGetters(["getValue"])
    }
}
</script>
