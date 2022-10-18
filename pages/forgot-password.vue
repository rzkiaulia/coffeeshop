<style lang="scss" scoped>
@import '~assets/scss/_variables';
@import '~assets/scss/style';

.page-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #707070;
  padding: 0 15px;
  background-image: url('~assets/images/ngopi.png');
  background-position: 0 center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  background-origin: padding-box;
  background-clip: border-box;
}

.input{
  border-radius: 10px;
}

.button{
  border-radius: 10px;
  border: 0px;
  width: 100px;
}

.button-custom{
  border-radius: 10px;
  border: 0px;
  width: 300px;
  height: 70px;
}

</style>
<template>
  <div class="page-wrapper">
    <div class="title has-text-white has-text-centered has-text-weight-semibold is-size-1 pt-6">Forgot your password?</div>
    <div class="title has-text-white has-text-centered has-text-weight-semibold is-size-5">Don’t worry, we got your back!</div>
    <div class="is-flex is-justify-content-center pt-6">
      <div class="is-inline-flex">
       <input class="input is-large" type="text" placeholder="Enter your email adress to get link">
      </div>
      <div class="is-flex is-align-items-justify ml-4">
        <b-button class="button is-yellow is-large"><p class="has-text-brown is-size-6 has-text-weight-bold">Send</p></b-button>
      </div>
    </div>
    <div class="title has-text-white has-text-centered has-text-weight-semibold is-size-5 pt-6">Click here if you didn’t receive any link <br> in 30 seconds</div>
    <div class="buttons is-justify-content-center pt-5">
      <b-button class="button-custom is-brown"><p class="has-text-white has-text-weight-bold">Resend Link</p></b-button>
    </div>
    <div class="timer has-text-centered">
      <strong class="has-text-white">{{ timerCount }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'minimal',
  data() {
    return {
      timerCount: 30
    }
  },

  watch: {
    timerCount: {
    handler(value) {
      if (value > 0) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      }
    },
  immediate: true // This ensures the watcher is triggered upon creation
  }
}
}
</script>