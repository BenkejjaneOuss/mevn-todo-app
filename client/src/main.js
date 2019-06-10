import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VeeValidate from 'vee-validate'

import VueSweetalert2 from 'vue-sweetalert2'

import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'

Vue.config.productionTip = false

Vue.use(ArgonDashboard)

Vue.use(VueAxios, axios)

Vue.use(VeeValidate);

Vue.use(VueSweetalert2);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
