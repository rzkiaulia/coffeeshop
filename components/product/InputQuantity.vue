<style lang="scss" scoped>
@import '~assets/scss/_variables';

.box-input-quantity {
  position: relative;
  display: flex;
  width: 120px;
  height: 40px;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;

  > .button-action {
    display: inline-flex;
    width: 30px;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;

    > .icon {
      width: 1.25rem;
      height: 1.25rem;
      background-color: $brown;
      color: #fff;
      border-radius: 25px;
    }

    &:hover {
      background-color: #c4e7f0;
    }
  }

  > .input-quantity {
    display: inline-flex;
    width: 50px;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    padding: 0 3px;
  }
}
</style>

<template>
  <div class="box-input-quantity">
    <div class="button-action" @click="onReduce">
      <span class="icon">
        <i class="mdi mdi-minus"></i>
      </span>
    </div>
    <input type="text" class="input-quantity" v-model="quantity" v-input-number="{ min: 1 }" @input="onInput" />
    <div class="button-action" @click="onAdd">
      <span class="icon">
        <i class="mdi mdi-plus"></i>
      </span>
    </div>
  </div>
</template>

<script>
import InputNumber from '@/directives/input-number.js';

export default {
  name: 'InputQuantity',

  directives: {
    InputNumber
  },

  props: {
    value: {
      type: Number,
      required: true,
      default: 1
    },
    maximum: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      quantity: parseInt(this.value)
    };
  },

  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.quantity = val <= 0 ? 1 : parseInt(val);
      }
    }
  },

  methods: {
    onInput(evt) {
      let value = evt.target.value.replace(/\D/g, '');
      this.$emit('input', value === '' ? 1 : parseInt(value));
    },

    onAdd() {
      let quantity = parseInt(this.quantity);
      let hasMaximum = this.maximum !== 0;
      if (hasMaximum && quantity >= this.maximum) {
        this.quantity = this.maximum;
        this.$emit('input', parseInt(this.quantity));
        this.$emit('on-maximum');
        return;
      }
      this.quantity = !isNaN(quantity) ? quantity + 1 : 2;
      this.$emit('input', parseInt(this.quantity));
    },

    onReduce() {
      let quantity = parseInt(this.quantity);

      if (quantity <= 1) {
        this.quantity = 1;
        this.$emit('input', parseInt(this.quantity));
        return;
      }

      this.quantity = !isNaN(quantity) ? quantity - 1 : 1;
      this.$emit('input', parseInt(this.quantity));
    }
  }
};
</script>
