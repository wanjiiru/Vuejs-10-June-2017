import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	count: 1
}
const getters = {
	evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
export default new Vuex.Store({
	state,
	getters,
})
