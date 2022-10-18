<style lang="scss" scoped>
@import '~assets/scss/style';
@import '~assets/scss/_variables';

.box-banner {
  position: relative;
  display: block;
  width: 100%;
  margin: 0 0 2.5rem;
  padding: 3.5rem 0;
  background: url(~assets/images/coffee.png) no-repeat center center fixed;
  background-size: cover;
}

.box-container {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.box-pricing {
  position: relative;
  display: block;
  width: 100%;
  max-width: 350px;
  padding: 0;
  margin: 0 0 2rem;

  > .box {
    max-height: 500px;
    padding-top: 2.5rem;
    border: 1px solid #6A4029;
    padding-bottom: 2.5rem;
  }

  .buttons > .button {
    min-width: 200px;
  }
}

.box-rating{
  position: relative;
  display: block;
  width: 100%;
  min-width: 300px;
  padding: 0;
  margin: 0 0 2rem;

> .box {
    max-height: 250px;
    padding-top: 2.5rem;
    border: 1px solid #6A4029;
    padding-bottom: 2.5rem;
  }
}

</style>
<template>
  <div class="is-relative is-block ">
    <div class="box-banner">
      <div class="container is-widescreen has-padding-content">
        <div class="columns is-mobile is-multiline mb-0">
          <div class="column">
            <div class="is-relative is-block py-4">
              <div class="title is-1 has-text-white has-max-width-600">Start Your Day with Coffee and Good Meals</div>
              <div class="subtitle is-5 has-text-white has-max-width-500 has-text-justified">We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</div>
            </div>
            <div class="buttons">
              <a class="button is-yellow is-medium px-6" href="#" target="_blank">
                <p class="has-text-brown">Get Started</p>
              </a>
            </div>
          </div>
          <div class="column is-12-mobile is-narrow-tablet">
            <b-autocomplete
                rounded
                placeholder="Search"
                icon="magnify"
                clearable>
                <template #empty>No results found</template>
            </b-autocomplete>
          </div>
        </div>
      </div>
    </div>
    <div class="container is-widescreen has-padding-content">
        <div class="columns is-mobile is-multiline is-vcentered mb-0">
          <div class="column is-12-mobile is-narrow-tablet">
            <div class="has-text-centered">
              <img src="~assets/images/teamwork.png" />
            </div>
          </div>
          <div class="column">
            <div class="is-relative is-block py-6">
              <div class="title is-3 has-max-width-400">
                We Provide Good Coffee and Healthy Meals
              </div>
              <div class="is-relative is-block">
                <div class="subtitle is-6 has-text-grey has-max-width-400 has-text-justified">
                 You can explore the menu that we provide with fun and have their own taste and make your day better.
                </div>
               <div class="is-relative is-block pb-6">
            <div class="is-relative is-block has-max-width-600-desktop">
              <ul class="unordered-list-radio has-text-justified mt-2">
                <li class="is-size-6">
                  High quality beans
                </li>
                <li class="is-size-6">
                 Healthy meals, you can request the ingredients
                </li>
                <li class="is-size-6">
                 Chat with our staff to get better experience for ordering
                </li>
                <li class="is-size-6">
                  Free member card with a minimum purchase of IDR 200.000.
                </li>
              </ul>
            </div>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="is-relative is-block has-text-centered">
        <div class="title is-2 has-text-black">Here is People’s Favorite</div>
        <p class="has-text-grey is-5">Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!</p>
      </div>
  <div class="box-container is-relative is-block pt-6">
    <div class="columns is-mobile is-centered is-multiline mb-0">
      <div class="column is-12-mobile is-6-tablet is-4-desktop">
        <div class="is-relative is-flex is-justify-content-center">
          <div class="box-pricing">
            <div class="box has-background-white">
              <div class="is-relative is-flex is-justify-content-center">
                <figure class="image is-96x96">
                  <img class="is-rounded is-centered" src="~assets/images/latte.png">
                </figure>
              </div>
                <div class="title is-5 has-text-darker has-text-centered has-text-weight-bold pt-6">Hazelnut Latte</div>
               <div class="is-relative is-justify-content-center">
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">HazelnutSyrup</p></b-checkbox><br>
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Wanilla Whipped Cream</p></b-checkbox><br>
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Ice / Hot</p></b-checkbox><br>
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Sliced Banana on Top</p></b-checkbox><br>
              </div>
              <div class="title is-5 has-text-black has-text-centered has-text-weight-bold pt-6">IDR 25.000</div>
              <div class="buttons is-justify-content-center">
                <b-button class="is-warning is-rounded" outlined><p class="has-text-brown">Order Now</p></b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-12-mobile is-6-tablet is-4-desktop">
        <div class="is-relative is-flex is-justify-content-center">
          <div class="box-pricing">
            <div class="box has-background-white">
               <div class="is-relative is-flex is-justify-content-center">
                <figure class="image is-96x96">
                  <img class="is-rounded is-centered" src="~assets/images/vanilla.png">
                </figure>
              </div>
              <div class="title is-5 has-text-darker has-text-centered has-text-weight-bold pt-6">Pinky Promise</div>
              <div class="is-relative is-block has-width-100">
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">1 Shot of Coffee</p></b-checkbox><br>
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Vanilla Whipped Cream</p></b-checkbox><br>
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Chocolate Biscuits</p></b-checkbox><br>
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Strawberry Syrup</p></b-checkbox><br>
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Sliced strawberry on Top</p></b-checkbox><br>
              </div>
              <div class="title is-5 has-text-black has-text-centered has-text-weight-bold pt-5">IDR 35.000</div>
              <div class="buttons is-justify-content-center">
                <b-button class="is-warning is-rounded" outlined><p class="has-text-brown">Select</p></b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-12-mobile is-6-tablet is-4-desktop">
        <div class="is-relative is-flex is-justify-content-center">
          <div class="box-pricing">
            <div class="box has-background-white">
              <div class="is-relative is-flex is-justify-content-center">
                <figure class="image is-96x96">
                  <img class="is-rounded is-centered" src="~assets/images/chicken-wings.png">
                </figure>
              </div>
              <div class="title is-5 has-text-darker has-text-centered has-text-weight-bold pt-6">Chicken Wings</div>
              <div class="is-relative is-block has-width-100">
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Wings</p></b-checkbox><br>
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Drum Sticks</p></b-checkbox><br>
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Mayonaise and Lemon</p></b-checkbox><br>
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Hot Fried</p></b-checkbox><br>
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Secret Recipe</p></b-checkbox><br>
                  <b-checkbox type="is-success ml-6 is-size-6"><p class="is-size-7">Buy 1 Get 1 only for Dine in</p></b-checkbox><br>
              </div>
              <div class="title is-5 has-text-black has-text-centered has-text-weight-bold pt-0">IDR 40.000</div>
              <div class="buttons is-justify-content-center">
                <b-button class="is-yellow is-rounded"><p class="has-text-brown">Select</p></b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="is-relative is-block is-justify-content-center">
    <div class="title is-3 has-text-centered has-text-black">Visit Our Store in the <br> Spot on the Map Below</div>
    <p class="has-text-grey-dark is-5 has-text-centered">See our store in every city on the spot and spen your good day there.<br> See you soon!</p>
    <img class="image px-6 pt-6" src="~assets/images/Global.png" />
  </div>
   <div class="title is-3 has-text-centered has-text-black">Our Partner</div>
    <div class="is-relative is-flex is-justify-content-center">
      <span class="image">
        <img style="image" src="~assets/images/Sponsor.png" />
      </span>
  </div>
  <div class="title is-3 has-text-centered has-text-black">Loved by Thousands of <br> Happy Customer</div>
  <p class="has-text-grey-dark is-5 has-text-centered">These are the stories of our customers who have visited us with great <br> pleasure.</p>
    <div class="box-container is-relative is-block pt-6">
      <div class="columns is-mobile is-centered is-multiline mb-0">
        <div v-for="item in data" class="column is-12-mobile is-6-tablet is-4-desktop" :key="item.id">
          <div class="is-relative is-flex is-justify-content-center">
            <div class="box-rating mx-4">
              <div class="box">
                <div class="block activity">
                  <div class="media" >
                    <div class="media-left">
                      <div class="image is-32x32">
                        <img :src="item.image"/>
                      </div>
                    </div>
                  <div class="media-content">
                    <div class="is-flex is-justify-content-space-between pb-3">
                      <div class="is-inline-flex is-align-items-start is-flex-direction-column">
                        <p class="has-text-black is-size-7">{{item.nama}}</p>
                        <p class="has-text-grey-light is-size-7">{{item.city}}</p>
                    </div>
                    <div class="is-flex is-align-items-justify">
                      <p class="has-text-black is-size-7">{{item.rate}}</p>
                      <div class="icon is-small"><img src="~assets/icons/star.svg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <p class="has-text-centered">{{item.review}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container">
    <div class="box has-background-light">
      <div class="is-flex is-justify-content-space-between pb-3">
        <div class="is-inline-flex is-align-items-start is-flex-direction-column">
          <div class="title is-size-4 has-text-black has-max-width-200">Check our promo today!</div>
            <p class="has-text-grey-dark is-size-7">Let's see the deals and pick yours!</p>
          </div>
        <div class="is-flex is-align-items-justify">
          <b-button class="is-yellow mt-3"><p class="has-text-brown has-text-weight-bold">See Promo</p></b-button>
        </div>
      </div>
    </div>
  </div> -->
</div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home | CoffeeShop'
    };
  },
  data() {
    return {
      rounded: true,

      data: [
        {
          image: require('/assets/images/robert.png'),
          nama : 'Viezh Robert',
          city : 'Warsaw, Poland',
          rate : '4.5',
          review : '“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!'
        },
        {
          image: require('/assets/images/yesica.png'),
          nama : 'Yessica Christy',
          city : 'Shanxi, China',
          rate : '4.5',
          review : '“I like it because I like to travel far and still can make my day better just by drinking their Hazelnut Latte'
        },
        {
          image: require('/assets/images/jou.png'),
          nama : 'Kim Young Jou',
          city : 'Seoul, South Korea',
          rate : '4.5',
          review : '“This is very unusual for my taste, I haven’t liked coffee before but their coffee is the best! and yup, you have to order the chicken wings, the best in town!'
        }
      ]
      }
    }
};
</script>