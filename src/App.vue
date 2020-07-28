<template>
  <div id="app">
    <currency-header
      :items="rates"
      :current-item="currentRate"
      @current-item="changeCurrentRate"
    />
    <currency-body
      :current-rate="currentRate"
      :items="ratesForPage"
    />
    <currency-pagination
      :prev-disabled="prevDisabled"
      :next-disabled="nextDisabled"
      @prev="currentPage--"
      @next="currentPage++"
    />
  </div>
</template>

<script>
import CurrencyHeader from "./components/CurrencyHeader";
import CurrencyBody from "./components/CurrencyBody";
import CurrencyPagination from "./components/CurrencyPagination";

export default {
  name: 'App',
  components: {
  	CurrencyHeader,
		CurrencyBody,
    CurrencyPagination
  },
  data: () => ({
  	itemsCount: 4,
    currentPage: 1,
  }),
  computed: {
  	rates() {
  		return this.$store.state.rates
    },
		ratesWithoutCurrent() {
  		return this.$store.getters.ratesWithoutCurrent
    },
    ratesForPage() {
  		const end = this.currentPage * this.itemsCount;
  		const start = end - this.itemsCount;
  		return this.ratesWithoutCurrent.slice(start, end);
    },
    currentRate: {
  		get() {
  			return this.$store.state.currentRate
      },
      set(val) {
  			this.$store.commit("setCurrentRate", val)
      }
    },
    prevDisabled() {
  		return this.currentPage === 1;
    },
    nextDisabled() {
  		return this.ratesWithoutCurrent.length / this.itemsCount <= this.currentPage;
    }
  },
  created() {
    this.$store.dispatch("getOpenRates")
	},
	methods: {
    changeCurrentRate(currentItem) {
			this.currentRate = currentItem
    }
	}
}
</script>

<style lang="scss">
  body {
    background-color: #ddd;
  }
  #app {
    max-width: 720px;
    background-color: #fff;
    padding-bottom: 19px;
    margin: 0 auto;
  }
</style>
