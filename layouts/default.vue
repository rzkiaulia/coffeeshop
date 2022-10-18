<template>
  <div class="app-screen">
    <app-navbar></app-navbar>
    <div class="page-content">
      <nuxt></nuxt>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
 import Footer from '@/components/Footer.vue';
 import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    AppFooter: Footer,
    AppNavbar: Navbar
  }
};
</script>
