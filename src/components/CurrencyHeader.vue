<template>
  <div class="currency-header">
    <h2 class="currency-header__title">Курс {{ currentItem.name }} сегодня</h2>
    <div class="currency-header__items">
      <currency-header-item
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :active="item.name === currentItem.name"
        @set-item="$emit('current-item', item)"
      />
    </div>
  </div>
</template>

<script>
  import CurrencyHeaderItem from "./CurrencyHeaderItem";

	export default {
		name: "CurrencyHeader",
    components: {
			CurrencyHeaderItem,
    },
    props: {
			items: {
				type: Array
      },
      currentItem: {
				type: Object
      }
    }
	}
</script>

<style lang="scss" scoped>
  .currency-header {
    padding: 30px 24px 0;
    background-color: #ffe782;
    &__title {
      margin-bottom: 8px;
      font-weight: 400;
      font-size: 21px;
      line-height: 25px;
    }
    &__items {
      display: grid;
      grid-template-columns: repeat(100, 90px);
      overflow: hidden;
    }
  }
</style>
