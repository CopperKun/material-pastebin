import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-light.css'
Vue.use(VueHighlightJS);

new Vue({
  router,
  render: h => h(App),
  components: { App }
}).$mount('#app');
