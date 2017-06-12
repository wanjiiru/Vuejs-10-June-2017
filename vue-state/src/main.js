// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store.js'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  el: '#app',
  store,
  components: { App }
  
})
