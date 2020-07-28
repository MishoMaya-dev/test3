<template>
  <div class="currency-body">
    <div class="currency-body__input">
      <currency-body-input
        :name="currentRate.name"
        v-model="value"
      />
    </div>
    <div class="currency-body__cards">
      <currency-body-card
        v-for="item in items"
        :name="currentRate.name"
        :value="value"
        :exchange-name="item.name"
        :exchange-value="getExchangeValue(item)"
      />
    </div>
  </div>
</template>

<script>
  import CurrencyBodyInput from "./CurrencyBodyInput";
  import CurrencyBodyCard from "./CurrencyBodyCard";

	export default {
		name: "CurrencyBody",
    components: {
			CurrencyBodyInput,
      CurrencyBodyCard
    },
    props: {
			currentRate: {
				type: Object,
      },
      items: {
				type: Array,
      }
    },
    data: () => ({
			value: 0,
    }),
    methods: {
			getExchangeValue({ value }) {
				const res = (this.value / this.currentRate.value) * value;
				return res.toFixed(2);
      }
    }
	}
</script>

<style lang="scss" scoped>
.currency-body {
  margin-bottom: 41px;
  padding: 29px 24px 0;
  &__input {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 23px;
  }
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(274px, 1fr));
    grid-gap: 18px;
  }
}
</style>
