import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import first from './views/first';
import two from "./views/two";
import final from "./views/final";


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/first',
      name:'first',
      component: first
    },
    {
      path:'/two',
      name:'two',
      component: two
    },
    {
      path:'/final',
      name:'final',
      component: final
    }

  ]
})
