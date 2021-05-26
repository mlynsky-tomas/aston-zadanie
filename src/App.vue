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
      id="zaciatokPoistenia"
    />
    <DateWrapper
      label="Koniec poistenia"
      id="koniecPoistenia"
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
    <SelectWrapper
      label="Počet osôb" 
      :options="osobyValues"
      id="pocetOsob"
      :required="true"
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
      {name: "Krátkodobé poistenie", value: "KCP"},
      {name: "Celoročné poistenie", value: "CCP"},
    ],
    balikValues: [
      {name: "Základný", value: "ZAKLADNY"},
      {name: "Rozšírený", value: "ROZSIRENY"},
      {name: "Extra", value: "EXTRA"},
    ],
    pripoisteniaValues: [
      {name: "Storno cesty", value: "STORNO"},
      {name: "Športové aktivity", value: "SPORT"}
    ],
    osobyValues: [
      {name: "1 osoba", value: 1},
      {name: "2 osoby", value: 2},
      {name: "3 osoby", value: 3}
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
