import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue';
import About from './pages/About.vue';


Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    { path: '/home', component: Home },
    { path: '/about', component: About }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
