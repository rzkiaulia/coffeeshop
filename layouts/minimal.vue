<template>
  <div class="app-screen">
    <div class="page-content">
      <nuxt></nuxt>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
 import Footer from '@/components/Footer.vue';

export default {
  components: {
    AppFooter: Footer
  }
};
</script>
