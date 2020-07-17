import Vue from 'vue'
import Boostrap from 'bootstrap/dist/css/bootstrap.css';
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './router/routes'
import store from './store/store'


Vue.use(VueRouter);

  
const router = new VueRouter({
	mode:"history",
	routes
});


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
