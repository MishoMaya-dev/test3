<template>
  <button
    class="header-item"
    :class="{ 'header-item--active': active }"
    @click="$emit('set-item')"
  >
    {{ name }}
  </button>
</template>

<script>
	export default {
		name: "CurrencyHeaderItem",
    props: {
			active: {
				type: Boolean,
        default: false
      },
      name: {
				type: String,
        default: ""
      }
    }
	}
</script>

<style lang="scss" scoped>
.header-item {
  width: 90px;
  padding: 14px 0;
  border: none;
  text-align: center;
  color: #CCAE68;
  background-color: transparent;
  &--active {
    border-radius: 10px 10px 0 0;
    color: #000;
    background-color: #FFF;
  }
}
</style>
