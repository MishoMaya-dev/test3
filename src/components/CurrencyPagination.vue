<template>
  <div class="pagination">
    <button
      class="pagination__prev"
      :class="{ 'disabled': prevDisabled }"
      :disabled="prevDisabled"
      @click="$emit('prev')"
    >
      НАЗАД
    </button>
    <button
      class="pagination__next"
      :class="{ 'disabled': nextDisabled }"
      :disabled="nextDisabled"
      @click="$emit('next')"
    >
      ДАЛЕЕ
    </button>
  </div>
</template>

<script>
	export default {
		name: "CurrencyPagination",
    props: {
			prevDisabled: {
				type: Boolean,
      },
			nextDisabled: {
				type: Boolean,
      },
    }
	}
</script>

<style lang="scss" scoped>
  .pagination {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 19px;
    justify-content: center;

    &__prev {
      border: 0;
      border-radius: 8px;
      background: #FFFFFF;
      box-shadow: 0 5px 6px rgba(157, 157, 157, 0.16);
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #2B2D33;
    }
    &__next {
      border: 0;
      border-radius: 8px;
      background: #FFFFFF;
      box-shadow: 0 5px 6px rgba(157, 157, 157, 0.16);
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #2B2D33;
    }
  }
  .disabled {
    background: #EFEFEF;
    color: #787878;
  }
  button {
    width: 112px;
    height: 34px;
  }
</style>
