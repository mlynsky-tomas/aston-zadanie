<template>
  <div id="app">
    <md-card>
      <md-card-header>
        <div class="md-title">Kalkulácia poistenia</div>
      </md-card-header>
      <md-card-content>
        <SelectWrapper
          label="Variant poistenia" 
          :options="variantValues"
          id="variant"
          :required="true"
        />
        <DateWrapper
          label="Začiatok poistenia"
          id="zaciatokPoistenia"
          v-if="!getDisabled.zaciatokPoistenia"
          :disabledDates = "disabledDatesZaciatok"
        />
        <DateWrapper
          label="Koniec poistenia"
          id="koniecPoistenia"
          v-if="!getDisabled.koniecPoistenia"
          :disabledDates="(date) => date < getZaciatokPoistenia"
        />
        <SelectWrapper
          label="Balík" 
          :options="balikValues"
          id="balik"
          :required="true"
          v-if="!getDisabled.balik"
        />
        <SelectWrapper
          label="Pripoistenia" 
          :options="pripoisteniaValues"
          id="pripoistenia"
          :multiple="true"
          v-if="!getDisabled.pripoistenia"
        />
        <SelectWrapper
          label="Počet osôb" 
          :options="osobyValues"
          id="pocetOsob"
          :required="true"
          v-if="!getDisabled.pocetOsob"
        />
        <InsuranceCalculation />
        <InsuranceVerification />
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import SelectWrapper from './components/SelectWrapper.vue'
import DateWrapper from './components/DateWrapper.vue'
import InsuranceCalculation from './components/InsuranceCalculation.vue'
import InsuranceVerification from './components/InsuranceVerification.vue'
import { mapGetters } from "vuex";

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
    ],
    disabledDatesZaciatok: function (date) {
      let yday = new Date();
      yday.setDate(yday.getDate());
      return date < yday
    }
  }),
  components: {
    SelectWrapper,
    DateWrapper,
    InsuranceCalculation,
    InsuranceVerification  
  },
  computed: {
      ...mapGetters(["getDisabled", "getZaciatokPoistenia", "getValue"])
  }
}

</script>

<style>

</style>
