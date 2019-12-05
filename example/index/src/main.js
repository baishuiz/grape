import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Grape from '../../../src/index.js';
new Grape([
  {
    name:'app1',
    projectIndex:'http://localhost:9020',
    path:'#/app1'
  },
  {
    name:'app2',
    projectIndex:'http://localhost:8050',
    path:'#/app2'
  }
]).start();
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
