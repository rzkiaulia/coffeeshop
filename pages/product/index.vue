<style lang="scss" scoped>
@import '~assets/scss/_variables';
@import '~assets/scss/style';
</style>

<template>
  <div class="container is-max-widescreen has-padding-content pt-6 pb-6">
    <promo-layout></promo-layout>
  </div>
</template>

<script>
import PromoLayout from '@/components/product/PromoLayout.vue';

export default {
  layout:'product',

  components: {
    PromoLayout
  }
}
</script>