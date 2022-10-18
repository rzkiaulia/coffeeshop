<style lang="scss" scoped>
@import '~assets/scss/_variables';
@import '~assets/scss/style';
</style>

  <template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <n-link class="navbar-item" to="/">
          <img src="~assets/icons/coffee.svg" />
          <span class="title has-text-black is-size-6">Coffee Shop</span>
        </n-link>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <n-link class="navbar-item" to="/">
            <div class="is-size-6 has-text-black is-light">Home</div>
          </n-link>
           <n-link class="navbar-item" to="/product">
            <div class="is-size-6 has-text-black is-light">Product</div>
          </n-link>
          <n-link class="navbar-item" to="/cart">
            <div class="is-size-6 has-text-brown has-text-weight-bold">Your Cart</div>
          </n-link>
          <n-link class="navbar-item" to="/">
            <div class="is-size-6 has-text-black">History</div>
          </n-link>
          </div>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <b-autocomplete
              rounded
              class="is-light"
              placeholder="Search"
              icon="magnify"
              clearable>
              <template #empty>No results found</template>
            </b-autocomplete>
          </div>
          <div class="navbar-item">
            <span class="brand-icon mt-1">
              <img src="~assets/icons/chat.svg">
            </span>
          <div class="profile ml-2 mt-2"><img src="~assets/images/profile.png"></div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>
