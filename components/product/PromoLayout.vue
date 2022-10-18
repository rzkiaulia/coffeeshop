<style lang="scss" scoped>
@import '~assets/scss/_variables';
@import '~assets/scss/style';

.box.box-promo {
  width: 300px;
  border: 0px;
  border-radius: 0px;
}

.box.box-menu{
  border: 0px;
  border-radius: 0px;
}

.button-custom{
  border-radius: 10px;
  width:229px;
  border: 0px;
}

.box.box-promo-menu{
 position: relative;
 display: block;
 width: 100%;
}

@media screen and (max-width: 767px) {
  .box.box-promo {
    width: 100%;
  }
}
</style>

<template>
  <div class="is-relative is-block has-width-100">
    <div class="columns is-mobile is-multiline is-variable mb-0">
      <div class="column is-12-mobile is-narrow-tablet">
        <div class="box box-promo is-unselectable has-box-shadow-light">
          <div class="media mb-4">
            <div class="media-promo">
              <div class="title has-text-brown has-text-weight-bold is-size-6 has-text-centered ml-5">Promo Today</div>
              <p class="is-size-7 has-text-centered ml-4">Coupons will be updated every weeks.<br>Check them out! </p>
                <div class="box is-army mt-5">
                  <div class="is-flex is-justify-content-space-between pb-3">
                    <div class="is-inline-flex is-align-items-start is-flex-direction-column">
                      <span class="brand-icon mt-1">
                        <img src="~assets/images/boneka1.png">
                      </span>
                    </div>
                    <div class="is-flex is-align-items-justify">
                      <p class="has-text-black has-text-weight-bold is-size-7 pt-3">HAPPY MOTHER’S DAY!<br>Get one of our favorite menu for free!</p>
                    </div>
                  </div>
                </div>
                <div class="box is-mustard">
                  <div class="is-flex is-justify-content-space-between pb-3">
                    <div class="is-inline-flex is-align-items-start is-flex-direction-column">
                      <span class="brand-icon mt-1">
                        <img src="~assets/images/boneka2.png">
                      </span>
                    </div>
                    <div class="is-flex is-align-items-justify">
                      <p class="has-text-black has-text-weight-bold is-size-7 pt-3">Get a cup of coffee for free on sunday morning <br>Only at 7 to 9 AM</p>
                    </div>
                  </div>
                </div>
                <div class="box is-army">
                  <div class="is-flex is-justify-content-space-between pb-3">
                    <div class="is-inline-flex is-align-items-start is-flex-direction-column">
                      <span class="brand-icon mt-1">
                        <img src="~assets/images/boneka1.png">
                      </span>
                    </div>
                    <div class="is-flex is-align-items-justify">
                      <p class="has-text-black has-text-weight-bold is-size-7 pt-3">HAPPY MOTHER’S DAY!<br>Get one of our favorite menu for free!</p>
                    </div>
                  </div>
                </div>
                <div class="box is-salem">
                  <div class="is-flex is-justify-content-space-between pb-3">
                    <div class="is-inline-flex is-align-items-start is-flex-direction-column">
                      <span class="brand-icon mt-1">
                        <img src="~assets/images/boneka3.png">
                      </span>
                    </div>
                    <div class="is-flex is-align-items-justify">
                      <p class="has-text-black has-text-weight-bold is-size-7 pt-3">HAPPY HALLOWEEN!<br>Do you like chicken wings? Get 1 free only if you buy pinky promise</p>
                    </div>
                  </div>
                </div>
                <div class="buttons is-justify-content-center pt-4">
                  <b-button class="button-custom is-brown"><p class="has-text-white has-text-weight-bold is-size-7">Apply Coupon</p></b-button>
                </div>
                <div class="title is-size-7">Terms and Condition</div>
                <ol class="is-size-7">
                  <li>You can only apply 1 coupon per day</li>
                  <li>It only for dine in</li>
                  <li>Buy 1 get 1 only for new user</li>
                  <li>Should make member card to apply coupon</li>
                </ol>
            </div> 
          </div>
        </div>
      </div>
      <div class="column is-12-mobile">
        <div class="box box-menu is-unselectable has-box-shadow-light">
          <product-tabs></product-tabs>
          <div class="columns is-multiline is-mobile">
            <div v-for="item in data"  class="column is-12-mobile is-6-tablet is-3-desktop" :key="item.id">
             <n-link :to="`${path}/${item.id}`">
              <div class="box box-promo-menu">
                <div class="image">
                  <img :src="item.image"/>
                </div>
                <div class="title is-size-6 has-text-centered has-text-black mb-3">{{item.nama}}</div>
                <p class="has-text-brown is-size-6 has-text-centered mb-3">{{item.price}}</p>
              </div>
             </n-link>
            </div>
            <p class="has-text-brown is-size-6 mt-6 pt-5">*the price has been cutted by discount appears</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductTabs from '@/components/ProductTabs.vue';

export default {
  components:{
    ProductTabs
},
 data() {
    return {
      rounded: true,

      data: [
        {
          id: 'e295faed-213c-428a-9998-ffe1b8c3366e',
          image: require('/assets/images/vegiee-mix.png'),
          nama : 'Veggie tomato',
          price : 'IDR 34.000',
        },
        {
          id: '9098f528-3917-4b0f-85ae-8a1a2835f39d',
          image: require('/assets/images/halzenut.png'),
          nama : 'Hazelnut Latte',
          price : 'IDR 25.000',
        },
        {
          id: '07766d40-f89c-4d07-b1bd-d2fba67edc1a',
          image: require('/assets/images/fried-rice.png'),
          nama : 'Summer fried rice',
          price : 'IDR 32.000',
        },
        {
          id: '0cb60f5d-5833-4d7b-b2f7-fa6c51ebe243',
          image: require('/assets/images/creamy-late.png'),
          nama : 'Creamy Ice Latte',
          price : 'IDR 27.000',
        },
         {
          id: 'e20be444-4935-4f44-97ea-3caad283140e',
          image: require('/assets/images/drum-stick.png'),
          nama : 'Drum Stick',
          price : 'IDR 30.000',
        },
        {
          id: '3ccdc791-9dde-4a12-8401-85c781d63367',
          image: require('/assets/images/salty-rice.png'),
          nama : 'Salty Rice',
          price : 'IDR 20.000',
        },
        {
          id: '07766d40-f89c-4d07-b1bd-d2fba67edc1a',
          image: require('/assets/images/fried-rice.png'),
          nama : 'Summer fried rice',
          price : 'IDR 32.000',
        },
        {
          id: '0cb60f5d-5833-4d7b-b2f7-fa6c51ebe243',
          image: require('/assets/images/creamy-late.png'),
          nama : 'Creamy Ice Latte',
          price : 'IDR 27.000',
        },
        {
          id: 'e295faed-213c-428a-9998-ffe1b8c3366e',
          image: require('/assets/images/vegiee-mix.png'),
          nama : 'Veggie tomato',
          price : 'IDR 34.000',
        },
        {
          id: '9098f528-3917-4b0f-85ae-8a1a2835f39d',
          image: require('/assets/images/halzenut.png'),
          nama : 'Hazelnut Latte',
          price : 'IDR 25.000',
        },
        {
          id: '07766d40-f89c-4d07-b1bd-d2fba67edc1a',
          image: require('/assets/images/fried-rice.png'),
          nama : 'Summer fried rice',
          price : 'IDR 32.000',
        },
        {
          id: '0cb60f5d-5833-4d7b-b2f7-fa6c51ebe243',
          image: require('/assets/images/creamy-late.png'),
          nama : 'Creamy Ice Latte',
          price : 'IDR 27.000',
        },
      ],
      path: this.$route.path
      }
    }
}
</script>