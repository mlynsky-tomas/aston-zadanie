import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(VueMaterial)

Vue.material.locale.dateFormat = 'dd.MM.yyyy'
Vue.material.locale.shortDays = ['Ned', 'Pon', 'Uto', 'Str', 'Štv', 'Pia', 'Sob']
Vue.material.locale.shorterDays = ['Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So']
Vue.material.locale.months = ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December']
Vue.material.locale.shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'Máj', 'Jún', 'Júl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
Vue.material.locale.firstDayOfAWeek = 1
Vue.material.locale.cancel = 'Zrušiť'
Vue.material.locale.confirm = 'Ok'

new Vue({
  render: h => h(App),
  el: '#app',
  components: { App },
  template: '<App/>'
}).$mount('#app')