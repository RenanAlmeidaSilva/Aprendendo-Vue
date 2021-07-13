import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueGoogleCharts from 'vue-google-charts'
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMqtt from 'vue-mqtt';

Vue.use(VueMqtt, 'ws://192.168.30.253:9001');
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(Vuetify)
Vue.use(VueGoogleCharts)
Vue.component('menu-icon', MenuIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
