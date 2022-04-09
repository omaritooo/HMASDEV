import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.use(axios)
Vue.prototype.$username = 'hmaser'
Vue.prototype.$password = 'hmaserv1987'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
