<template>
  <div>
    <md-datepicker v-model="selectedDate">
      <label>{{ label }}</label>
    </md-datepicker>
  </div>
</template>

<script>
  export default {
    name: 'DateWrapper',
    props: {
        label: String
    },
    data: () => ({
      selectedDate: null
    })
  }
</script>
