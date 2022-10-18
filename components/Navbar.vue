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
            <div class="is-size-6 has-text-brown has-text-weight-bold">Home</div>
          </n-link>
           <n-link class="navbar-item" to="/product">
            <div class="is-size-6 has-text-black">Product</div>
          </n-link>
          <n-link class="navbar-item" to="/cart">
            <div class="is-size-6 has-text-black">Your Cart</div>
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
            <n-link class="navbar-item" to="/signin">
            <div class="is-size-6 has-text-black">Login</div>
          </n-link>
          </div>
          <div class="navbar-item">
            <n-link class="button is-yellow is-rounded" to="/signup">
              <div class="has-text-brown is-size-6">Sign Up</div>
            </n-link>
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
