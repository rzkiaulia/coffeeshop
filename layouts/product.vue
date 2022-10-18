<style lang="scss" scoped>
@import '~assets/scss/_variables';
@import '~assets/scss/style';
</style>

<template>
  <div class="app-screen">
    <app-navbar></app-navbar>
    <div class="page-content">
      <div class="divider mt-5"></div>
      <nuxt></nuxt>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
 import Footer from '@/components/Footer.vue';
 import Navbar from '@/components/product/Navbar.vue';

export default {
  components: {
    AppFooter: Footer,
    AppNavbar: Navbar
  }
};
</script>
