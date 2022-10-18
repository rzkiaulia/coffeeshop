<style lang="scss" scoped>
@import '~assets/scss/_variables';

.auth-page,
.side-drawer,
.section-content {
  position: relative;
  min-height: 100vh;
}

.auth-page {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
}

.side-drawer {
  display: block;
  width: 350px;
  margin: 0;
}

.side-drawer-inner {
  position: relative;
  height: 100%;
  width: 500px;
  background: url(~assets/images/signup.png) no-repeat fixed;

}

.section-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 350px);
}

.section-form {
  width: 100%;
  max-width: 600px;
  padding: 0 40px;
  
}

.banner-image-wrapper {
  position: relative;
  min-height: calc(30vh + 335px);
}

.banner-image {
  position: absolute;
  width: calc(100% + (3rem + 50px));
  bottom: 0;
  left: 0;
}

@media screen and(max-width: 800px) {
  .side-drawer {
    display: none;
  }

  .section-content {
    width: 100%;
  }
}
</style>

<template>
  <div class="auth-page">
    <div class="side-drawer">
      <div class="side-drawer-inner px-6 py-6">
        <!-- <div class="is-relative is-block pb-6">
          <n-link class="image" to="/">
           <div class="is-size-4 has-text-white">FazzPay</div>
          </n-link>
        </div> -->
        <!-- <div class="banner-image-wrapper">
          <div class="banner-image">
            <img class="image" src="~assets/images/image-background.png" />
          </div>
        </div> -->
        <!-- <div class="title is-5 has-text-white has-text-centered">
          App that Covering Banking Needs.
        </div> -->
        <!-- <p class="has-text-white is-size-6 has-text-centered">Zwallet is an application that focussing in banking needs for all users
in the world. Always updated and always following world trends.
5000+ users registered in Zwallet everyday with worldwide
users coverage.</p> -->
      </div>
    </div>
    <div class="section-content">
      <div class="section-form py-6">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout'
};
</script>
