<style lang="scss" scoped>
@import '~assets/scss/_variables';
@import '~assets/scss/style';

.box.box-tag{
width: 300px;
align-items: center;
justify-content: center;
position: relative;
}

.button{
border: 0px;
}

</style>

<template>
  <div class="container is-max-widescreen has-padding-content pt-6 pb-6">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <n-link class="has-text-dark is-size-6" to="/product">Favorite & Promo</n-link>
        </li>
        <li>
          <n-link class="has-text-brown has-text-weight-bold is-size-6" to="/products">Cold Brew</n-link>
        </li>
      </ul>
    </nav>
    <div class="columns is-mobile is-multiline is-variable">
      <div class="column is-12-mobile is-6-tablet is-6-desktop is-5-widescreen">
       <div class="is-relative is-flex is-justify-content-center">
        <div class="image is-128x128">
          <img class="is-rounded is-128x128" src="~assets/images/kopi.png">
        </div>
       </div>
       <div class="is-relative is-justify-content-center">
        <div class="box box-tag mx-6 mt-4">
          <div class="title has-text-black has-text-weight-bold is-size-5">Delivery and Time</div>
          <b-taglist>
            <b-tag type="is-brown"><p class="has-text-white">Dine in</p></b-tag>
            <b-tag type="is-light">Door Delivery</b-tag>
            <b-tag type="is-light">Pick up</b-tag>
        </b-taglist>
        <b-taglist>
            <b-tag type="is-white"><p class="has-text-black">Now</p></b-tag>
            <b-tag type="is-brown"><p class="has-text-white">Yes</p></b-tag>
            <b-tag type="is-light">No</b-tag>
        </b-taglist>
        <div class="is-flex is-align-items-justify">
          <p class="has-text-black is-size-7 mt-1">Set time</p>
          <b-input class="ml-2" placeholder="Enter time for reservation" size="is-small"></b-input>
        </div>
        </div>
         <div class="box box-tag mx-6">
          <div class="title has-text-black has-text-weight-bold has-text-centered is-size-5">Choose a size</div>
        <div class="s-relative is-flex is-justify-content-center">
          <button class="button is-yellow is-rounded"><p class="has-text-black has-text-weight-bold has-text-centered">R</p></button>
          <button class="button is-yellow is-rounded"><p class="has-text-black has-text-weight-bold has-text-centered">L</p></button>
          <button class="button is-yellow is-rounded"><p class="has-text-black has-text-weight-bold has-text-centered">XL</p></button>
        </div>
        </div>
       </div>
      </div>
      <div class="column is-12-mobile">
        <div class="title has-text-black has-text-weight-bold is-size-1 has-text-justified">COLD BREW</div>
        <div class="has-text-justified has-max-width-500 has-text-brown is-size-6">Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</div>
        <div class="has-text-justified has-text-brown is-size-6 mt-5">Delivery only on <strong class="has-text-brown is-size-6">Monday to <br> friday</strong> at  <strong class="has-text-brown is-size-6">1 - 7 pm</strong></div>
         <div class="is-relative is-block pt-4">
          <div class="is-relative is-block has-max-width-450">
            <div class="columns is-mobile">
              <div class="column is-narrow">
                <input-quantity
                  :value="quantity"
                  @input="(val) => (quantity = val)"
                  :maximum="data ? data.stock : 1"
                ></input-quantity>
              </div>
              <div class="column">
                 <div class="title has-text-black has-text-weight-bold is-size-5 mt-2 ml-6">IDR 30.000</div>
              </div>
            </div>
          </div>
          <div class="button">
             <button class="button is-brown mt-4" style="width:300px;"><p class="has-text-white has-text-weight-bold has-text-centered">Add to Cart</p></button>
          </div>
          <div class="button mt-4">
            <button class="button is-yellow" style="width:300px;"><p class="has-text-brown has-text-weight-bold has-text-centered">Ask a Staff</p></button>
          </div>
        </div>
        <div class="box mt-4">
          <div class="media" >
            <div class="media-left">
              <div class="image is-64x64">
                <img class="is-rounded" src="~assets/images/kopi.png">
              </div>
            </div>
            <div class="media-content">
              <div class="is-flex is-justify-content-space-between pb-3">
                <div class="is-inline-flex is-align-items-start is-flex-direction-column">
                  <p class="has-text-black has-text-weight-bold is-size-5">COLD BREW</p>
                  <p class="has-text-black is-size-7">x1 (Large)</p>
                  <p class="has-text-black is-size-7">x1 (Regular)</p>
                </div>
                <div class="is-flex is-align-items-justify pt-4">
                  <p class="has-text-black has-text-weight-bold is-size-5 mt-3 mr-5">Checkout</p>
                  <n-link  class="button is-rounded is-yellow is-medium" to="/cart"><img src="~assets/icons/arrow.svg"></n-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PromoLayout from '@/components/product/PromoLayout.vue';
import InputQuantity from '@/components/product/InputQuantity.vue';

export default {
  layout:'product',

  components: {
    PromoLayout,
    InputQuantity
  }
}
</script>