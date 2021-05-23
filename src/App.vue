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
    <SelectWrapper
      label="Balík" 
      :options="balikValues"
      id="balik"
      :required="true"
    />
    <SelectWrapper
      label="Pripoistenia" 
      :options="pripoisteniaValues"
      id="pripoistenia"
      :multiple="true"
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
      {name: "Krátkodobé poistenie", value: 1},
      {name: "Celoročné poistenie", value: 2},
    ],
    balikValues: [
      {name: "Základný", value: 1},
      {name: "Rozšírený", value: 2},
      {name: "Extra", value: 3},
    ],
    pripoisteniaValues: [
      {name: "Storno cesty", value: 1},
      {name: "Športové aktivity", value: 2}
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
