<template>
  <div class="body-card">
    <div class="body-card__header">
      <span>{{ value }} </span>
      <span>{{ name }} =</span>
    </div>
    <div class="body-card__body">
      <span>{{ exchangeValue }}</span>
      <span> {{ exchangeName }}</span>
    </div>
  </div>
</template>

<script>
	export default {
		name: "CurrencyBodyCard",
    props: {
			name: {
				type: String,
        default: ""
      },
      value: {
				type: Number,
        default: 0
      },
      exchangeName: {
				type: String,
        default: ""
      },
      exchangeValue: {
				type: String,
        default: "0"
      }
    },
	}
</script>

<style lang="scss" scoped>
  .body-card {
    padding: 18px 0 18px 30px;
    box-shadow: 0px 3px 6px rgba(157, 157, 157, 0.16);
    border-radius: 12px;
    font-weight: 300;
    &__header {
      margin-bottom: 19px;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.0171429px;
      & span:last-child {
        color: #B9B9B9;
      }
    }
    &__body {
      font-size: 48px;
      line-height: 56px;
      letter-spacing: 0.0342857px;
      & span:last-child {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.0171429px;
      }
    }
  }
</style>
