import Vue from 'vue';
import AOS from 'aos';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  mounted() {
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app');
