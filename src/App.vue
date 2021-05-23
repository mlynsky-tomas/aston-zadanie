<template>
  <div id="app">
    <SelectWrapper
      label="Variant poistenia" 
      :options="variantValues"
      id="variant"
      :required="true"
    />
    <DateWrapper
      label="Začiatok poistenia"
    />
    <DateWrapper
      label="Koniec poistenia"
    />
  </div>
</template>

<script>
import SelectWrapper from './components/SelectWrapper.vue'
import DateWrapper from './components/DateWrapper.vue'

export default {
  name: 'App',
  data: () => ({
    variantValues: [
      {name: "Krátkodobé poistenie", value: "1"},
      {name: "Celoročné poistenie", value: "2"},
    ]
  }),
  components: {
    SelectWrapper,
    DateWrapper  
  }
}

</script>

<style>

</style>
