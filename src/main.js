// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible' //px转rem工具
import VueAwesomeSwiper from 'vue-awesome-swiper' //轮播插件
import 'swiper/dist/css/swiper.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import countDown from 'vue-canvas-countdown' //引入canvas插件
import vuex from 'vuex' //引入vuex
import store from './store/store' //引入store



Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(iView);
Vue.use(vuex);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})