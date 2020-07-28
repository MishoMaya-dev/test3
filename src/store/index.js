import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
		rates: [
			{ name: "EUR", value: 1 },
			{ name: "EUR1", value: 1 },
			{ name: "EUR2", value: 1 },
			{ name: "EUR3", value: 1 },
			{ name: "EUR4", value: 1 },
			{ name: "EUR5", value: 1 },
			{ name: "EUR6", value: 1 },
			{ name: "EUR7", value: 1 },
		],
		base: "EUR",
		baseValue: 0,
		currentRate: { name: "EUR", value: 1 }
	},
  mutations: {
  	setRates(state, data) {
  		state.rates = data
		},
		setBase(state, data) {
  		state.base = data
		},
		setCurrentRate(state, data) {
  		state.currentRate = data
		}
  },
  actions: {
		async getOpenRates({ commit }) {
			const proxyurl = "https://cors-anywhere.herokuapp.com/";
			const url = "http://api.openrates.io/latest";
			const { data } = await axios.get(proxyurl + url);
			const rates = Object.entries(data.rates).map(([key, value]) => {
				return {
					name: key,
					value
				}
			});
			rates.push({ name: data.base, value: 1 });
			commit("setRates", rates);
			commit("setBase", data.base);
			commit("setCurrentRate", rates[0])
		},
  },
	getters: {
  	ratesWithoutCurrent(state) {
  		return state.rates.filter(rate => rate.name !== state.currentRate.name)
		}
	}
})
