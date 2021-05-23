<template>
  <div id="app">
    <SelectWrapper
      label="Variant poistenia" 
      :options="variantValues"
      id="variant"
      :required="true"
    />
  </div>
</template>

<script>
import SelectWrapper from './components/SelectWrapper.vue'

export default {
  name: 'App',
  data: () => ({
    variantValues: [
      {name: "Krátkodobé poistenie", value: "1"},
      {name: "Celoročné poistenie", value: "2"},
    ]
  }),
  components: {
    SelectWrapper  
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
