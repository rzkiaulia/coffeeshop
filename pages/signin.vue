<style lang="scss" scoped>
@import '~assets/scss/_variables';
@import '~assets/scss/style';

.button{
  border-radius: 10px; 
}

</style>
<template>
 <auth-layout class="is-unselectable">
  <div class="is-block is-relative">
    <div class="media">
      <div class="media-left">
        <div class="image is-32x32">
          <img class="image brand-image" src="~assets/icons/coffee.png" />
        </div>
      </div>
      <div class="media-content">
        <div class="is-flex is-justify-content-space-between pb-3">
          <div class="is-inline-flex">
            <p class="title has-text-black is-size-6 pt-3">Coffee Shop</p>
          </div>
          <div class="is-flex is-align-items-justify">
            <b-button class="is-yellow is-rounded px-5" tag="router-link" to="/signup"><p class="has-text-brown">Sign Up</p></b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="title has-text-centered has-text-brown is-size-5 has-weight-bold pt-5">Login</div>
     <div class="field pt-2">
      <div class="label">Email Adress :</div>
      <b-input placeholder="Enter your email adress"></b-input>
    </div>
    <div class="field pt-2">
      <div class="label">Password :</div>
      <b-input placeholder="Enter your password"></b-input>
    </div>
    <div class="is-relative is-flex is-justify-content-flex-start">
      <n-link class="has-text-brown has-text-weight-bold" to="/forgot-password">Forgot Password?</n-link>
    </div>
    <div class="buttons pt-4">
      <b-button class="is-yellow" tag="router-link" to="/product" expanded><p class="has-text-brown">Login</p></b-button>
    </div>
    <div class="buttons pt-2">
      <button class="button is-social is-google is-fullwidth">
        <span class="brand-icon mt-1">
          <img src="~assets/icons/google.svg">
        </span>
        <div class="brand-name ml-2"><p class="has-text-black has-text-weight-bold">Sign up with Google</p></div>
      </button>
    </div>
  </div>
</auth-layout>
</template>

<script>
import AuthLayout from '@/components/AuthLayout.vue';

export default {
  layout: 'minimal',

  components: {
  AuthLayout,
}
}
</script>