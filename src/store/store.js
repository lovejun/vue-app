import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

// 数据存储
const state = {
	count: 10,
	account: '', //合计总价
};
// 处理数据的方法
const mutations = {
	add(state) {
		state.count += 1;
		console.log(this.state.count);
	},
	reduce(state) {
		state.count -= 1;
	},
};
// 过滤条件
const getters = {
	count: function(state) {
		return state.count += 3;
	},
};
// 异步处理数据的方法
const actions = {
	addAction(context) {
		context.commit('add', 10);
	},
	reduceAction(commit) {
		commit('reduce');
	},
};
export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions,
});