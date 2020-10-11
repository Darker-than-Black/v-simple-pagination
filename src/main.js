import Vue from 'vue'
import App from './App.vue'
import VSimplePagination from '@/components/VSimplePagination'

Vue.config.productionTip = false

Vue.component('VSimplePagination', VSimplePagination)

new Vue({
  render: h => h(App),
}).$mount('#app')
