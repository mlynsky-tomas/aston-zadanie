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

<style lang="scss">
@import "./_variables.scss";
body {
  background: $background;
  .md-card {
    width: 400px;
    display: inline-block;
    position: relative;
    left: calc(50% - 200px);
    top: 20px;
    .md-title {
      color: $grad1
    }
    .md-field {
        .md-input {
            -webkit-text-fill-color: $fontDark !important;
        }
        &:before {
            background-color: $fontDark !important;
        }
        label {
            color: $fontDark !important;
        }
    }
    .md-button {
      &.md-primary {
        color: $white !important;
        background: $green !important;
        margin: 0px;
        margin-top: 10px;
      }
      &[disabled] {
        color: $inputDisabledFont !important;
        background: $inputDisabledBorder !important;
      }
    }
    .insurance-calculation {
      color: $green;
      font-size: 16px;
      font-weight: 600;
    }
    .insurance-verification {
      color: $grad1;
      font-size: 16px;
      font-weight: 600;
    }
  }
  .md-list {
    .md-selected {
      .md-list-item-content {
        color: $grad1 !important;
      }
    }
    .md-list-item-container:not(.md-list-item-default):not(.md-list-item-expand):not([disabled]) {
      &:hover {
        background-color: $selectItemFocus !important;
      }
    }
    .md-checkbox {
      &.md-checked {
        .md-checkbox-container {
          background-color: $green !important;
          border-color: $green !important;
        }
      }
    }
  }
  .md-datepicker-dialog {
    .md-datepicker-header {
      background-color: $grad1 !important;
    }
    .md-datepicker-today {
      color: $fontDark !important;
    }
    .md-datepicker-selected {
      background-color: $grad1 !important;
    }
    .md-button {
      color: $fontDark !important
    }
  }
}
</style>
