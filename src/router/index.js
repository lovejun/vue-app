import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login/login'
import home from '@/components/home/home'
import count from '@/components/page/count'
import month from '@/components/page/month'
import canvas from '@/components/page/canvas'
import poet from '@/components/page/poet'
import test from '@/components/login/test'
import vuex from '@/components/page/vuex'
import demo from '@/components/page/demo'
import flowertea from '@/components/page/flowertea'
import shoplist from '@/components/page/shoplist'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/index',
    component: index
  }, {
    path: '/login',
    component: login
  }, {
    path: '/home',
    component: home
  }, {
    path: '/count',
    component: count
  }, {
    path: '/month',
    component: month
  }, {
    path: '/canvas',
    component: canvas
  }, {
    path: '/poet',
    component: poet
  }, {
    path: '/test',
    component: test
  }, {
    path: '/vuex',
    component: vuex
  }, {
    path: '/demo',
    component: demo
  }, {
    path: '/flowertea',
    component: flowertea
  }, {
    path: '/shoplist',
    component: shoplist
  }]
})