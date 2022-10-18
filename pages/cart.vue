<style lang="scss" scoped>
@import '~assets/scss/_variables';
@import '~assets/scss/style';

.page-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #707070;
  padding: 0 15px;
  background-image: url('~assets/images/barista.png');
  background-position: 0 center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  background-origin: padding-box;
  background-clip: border-box;
}

.box.box-address{
  width: 325px;
}

.button.button-payment{
  border: 0px;
  border-radius: 10px;
}
</style>

<template>
  <div class="page-wrapper">
    <div class="container is-max-widescreen has-padding-content pt-6 pb-6">
      <div class="title has-text-white has-text-weight-bold is-size-4">Checkout your <br> item now!</div>
      <div class="columns is-mobile is-multiline is-variable">
        <div class="column is-12-mobile is-6-tablet is-6-desktop is-6-widescreen">
          <div class="box box-order-sumary">
            <div class="title has-text-brown has-text-weight-bold is-size-4 has-text-centered mt-5">Order Summary</div>
            <div v-for="item in data" class="media" :key="item.id" >
            <div class="media-left">
              <div class="image is-64x64">
                 <img :src="item.image"/>
              </div>
            </div>
            <div class="media-content">
              <div class="is-flex is-justify-content-space-between pb-3">
                <div class="is-inline-flex is-align-items-start is-flex-direction-column">
                  <p class="has-text-black is-size-6">{{item.menu}}</p>
                  <p class="has-text-black is-size-7">{{item.jumlah}}</p>
                  <p class="has-text-black is-size-7">{{item.size}}</p>
                </div>
                <div class="is-flex is-align-items-justify pt-4">
                  <p class="has-text-black is-size-6 mt-3 mr-5">{{item.price}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="divider mt-5"></div>
          <div class="is-flex is-justify-content-space-between pb-3">
            <div class="is-inline-flex is-align-items-start is-flex-direction-column">
              <span class="has-text-brown is-size-6 mt-3">
                SUBTOTAL
              </span>
              <span class="has-text-brown is-size-6 mt-3">
                TAX & FEES
              </span>
              <span class="has-text-brown is-size-6 mt-3">
                SHIPPING
              </span>
              <span class="has-text-black has-text-weight-bold is-size-5 mt-5">
                TOTAL
              </span>
            </div>
            <div class="is-align-items-justify">
              <p class="has-text-brown is-size-6 mt-3">IDR 120.000</p>
              <p class="has-text-brown is-size-6 mt-3">IDR 20.000</p>
              <p class="has-text-brown is-size-6 mt-3">IDR 10.000</p>
              <p class="has-text-black has-text-weight-bold is-size-5 mt-5 mr-2">IDR 150.000</p>
            </div>
          </div>
          </div>
        </div>
        <div class="column is-12-mobile">
          <p class="has-text-white has-text-weight-bold is-size-6">Address details</p>
          <div class="box box-address mt-3">
            <p class="has-text-black is-size-6 has-text-justified"><strong class="has-text-black is-size-6">Delivery to</strong> Iskandar Street</p>
            <div class="divider mt-3"></div>
            <p class="has-text-black is-size-6 has-text-justified has-max-width-250">Km 5 refinery road oppsite republic road, effurun, Jakarta</p>
            <div class="divider mt-3"></div>
             <p class="has-text-black is-size-6 has-text-justified has-max-width-250">+62 81348287878</p>
          </div>
          <p class="has-text-white has-text-weight-bold is-size-6 mt-5">Payment method</p>
          <div class="box box-address mt-3">
            <div class="is-flex is-align-items-justify">
              <b-radio v-model="radio"
                native-value="default" type="is-warning">
                <a class="button button-payment is-orange is-small px-4">
                  <span class="icon has-text-white"><img class="icon" src="~assets/icons/card.svg"></span>
                </a> 
            </b-radio> 
            <p>Card</p>
            </div>
            <div class="divider mt-3"></div>
            <div class="is-flex is-align-items-justify mt-3">
              <b-radio v-model="radio"
                native-value="default" type="is-warning">
                <a class="button button-payment is-brown is-small px-4">
                  <span class="icon has-text-white"><img class="icon" src="~assets/icons/bank.svg"></span>
                </a> 
            </b-radio> 
            <p>Bank account</p>
            </div>
            <div class="divider mt-3"></div>
            <div class="is-flex is-align-items-justify mt-3">
              <b-radio v-model="radio"
                native-value="default" type="is-warning">
                <a class="button button-payment is-yellow is-small px-4">
                  <span class="icon has-text-white"><img class="icon" src="~assets/icons/delivery.svg"></span>
                </a> 
            </b-radio> 
            <p>Cash on delivery</p>
            </div>
          </div>
            <button class="button is-brown mt-1" style="width:325px;"><p class="has-text-white has-text-weight-bold has-text-centered">Confirm and Pay</p></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PromoLayout from '@/components/product/PromoLayout.vue';
// import SvgIcon from '@/components/SvgIcon.vue';
export default {
  layout:'product',

  components: {
    PromoLayout,
    // SvgIcon,
  },

  data() {
    return {
      rounded: true,

      data: [
        {
          image: require('/assets/images/halzenut-late.png'),
          menu : 'Halzenut Late',
          jumlah : 'x1',
          size : 'Regular',
          price : 'IDR 24.0'
        },
        {
          image: require('/assets/images/fire-wings.png'),
          menu : 'Chicken Fire Wings',
          jumlah : 'x2',
          size : '-',
          price : 'IDR 30.0'
        }
      ],
      }
    }
}
</script>