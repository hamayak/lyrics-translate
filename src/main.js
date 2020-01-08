import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  axios,
  VueAxios,
  render: h => h(App)
}).$mount('#app')
