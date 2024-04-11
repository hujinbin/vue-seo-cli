import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld'),
      // component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "About" */ '@/components/About'),
      // component: About
    }
  ]
})
