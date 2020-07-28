<template>
  <div class="body-input">
    <label>
      <input type="text"
        v-model.number="valueModel"
      >
      {{ name }}
    </label>
  </div>
</template>

<script>
	export default {
		name: "CurrencyBodyInput",
    props: {
			name: {
				type: String,
        default: ""
      },
      value: {
				type: Number
      }
    },
    computed: {
			valueModel: {
				get() {
					return this.value
        },
        set(val) {
					this.$emit('input', +val)
        }
      }
    },
    methods: {
			input(event) {
				console.log(event)
      }
    }
	}
</script>

<style lang="scss" scoped>
.body-input {
  height: 26px;
  color: #B9B9B9;
  font-size: 18px;
  line-height: 21px;
  & input {
    width: 121px;
    border-color: #D9D9D9;
    border-width: 0 0 1px 0;
    text-align: end;
    color: #2B2D33;
  }
}
</style>
