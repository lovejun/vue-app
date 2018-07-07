import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'  
import login from '@/components/login/login'
import home from '@/components/home/home'
import count from '@/components/page/count'
import month from '@/components/page/month'
import canvas from '@/components/page/canvas'
import poet from '@/components/page/poet'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/login',
      component: login
    },
     {
      path: '/home',
      component: home
    },
    {
      path: '/count',
      component: count
    },
    {
      path: '/month',
      component: month
    },
    {
      path: '/canvas',
      component: canvas
    },
    {
      path: '/poet',
      component: poet
    }
  ]
})
