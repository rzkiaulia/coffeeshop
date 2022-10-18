<style lang="scss" scoped>
@import '~assets/scss/style';
@import '~assets/scss/_variables';
</style>

<template>
 <footer class="footer has-background-light">
  <div class="is-relative is-block">
  <div class="container is-widescreen has-padding-content">
    <div class="columns is-multiline is-mobile pb-3">
      <div class="column is-6-mobile is-4-tablet is-2-desktop">
        <div class="is-flex is-align-items-justify">
          <img class="image brand-image" src="~assets/icons/coffee.png" />
          <span class="title has-text-black is-size-6 ml-3 pt-2">Coffee Shop</span>
        </div>
         <div class="block pt-4">
          <p class="has-text-black is-size-7">
            Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans
          </p>
        </div>
        <div class="is-flex is-align-items-justify">
          <span class="icon is-large"><img src="~assets/icons/facebook.svg"></span>
          <span class="icon is-large"><img src="~assets/icons/instagram.svg"></span>
          <span class="icon is-large"><img src="~assets/icons/twitter.svg"></span>
        </div>
        <p class="has-text-grey is-size-7">©2020CoffeeStore</p>
      </div>
      <div class="container is-relative is-block">
      <div class="level py-5">
        <div class="level-left">
          <!-- <div class="level-item">
            <p class="has-text-grey-light is-size-7">2020 FazzPay. All right reserved.</p>
          </div> -->
        </div>
        <div class="level-right">
          <div class="level-item">    
          <ul class="pr-6 mr-6 pb-5">
            <li>
            <div class="title is-7">Product</div>
            </li>
            <li>
              <n-link class="has-text-grey is-size-7" to="#!">Download</n-link>
            </li>
            <li class="mt-2">
              <n-link class="has-text-grey is-size-7" to="#!">Pricing</n-link>
            </li>
            <li class="mt-2">
              <n-link class="has-text-grey is-size-7" to="#!">Locations</n-link>
            </li>
            <li class="mt-2">
              <n-link class="has-text-grey is-size-7" to="#!">Countries</n-link>
            </li>
            <li class="mt-2">
              <n-link class="has-text-grey is-size-7" to="#!">Blog</n-link>
            </li>
          </ul>
          <ul class="pr-6 mr-6 pb-5">
            <li>
            <div class="title is-7">Engage</div>
            </li>
            <li>
              <n-link class="has-text-grey is-size-7" to="#!">Coffe Shop ? </n-link>
            </li>
            <li class="mt-2">
              <n-link class="has-text-grey is-size-7" to="#!">FAQ</n-link>
            </li>
            <li class="mt-2">
              <n-link class="has-text-grey is-size-7" to="#!">About Us</n-link>
            </li>
            <li class="mt-2">
              <n-link class="has-text-grey is-size-7" to="#!">Privacy Policy</n-link>
            </li>
            <li class="mt-2">
              <n-link class="has-text-grey is-size-7" to="#!">Terms of Service</n-link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
 </div>
</footer>
</template>