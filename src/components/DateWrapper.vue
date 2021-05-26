<template>
  <div>
    <md-datepicker v-model="selectedDate">
      <label>{{ label }}</label>
    </md-datepicker>
  </div>
</template>

<script>
import { getUIDate, convertDate } from "../utils.js"

export default {
    name: 'DateWrapper',
    props: {
        label: String,
        id: String
    },
    data: () => ({
        selectedDate: getUIDate(new Date())
    }),
    watch: {
        selectedDate: function () {
            let name, value;
            name = this.id;
            value = convertDate(this.selectedDate);
            this.$store.commit("updateForm", {name, value})
        }
    }
}
</script>
