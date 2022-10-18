<style lang="scss" scoped>
@import '~assets/scss/_variables';
@import '~assets/scss/style';
</style>

<template>
  <div class="tabs is-small is-fullwidth">
    <ul>
      <li class="is-active"><a>Favorite & Promo</a></li>
      <li><a>Coffee</a></li>
      <li><a>Non Coffee</a></li>
      <li><a>Foods</a></li>
      <li><a>Add-on</a></li>
    </ul>
  </div>
  <!-- <b-tabs class="is-custom-tabs" position="is-centered" v-model="activeTab">
    <b-tab-item v-for="(tab, i) in tabs" :key="i">
      <template #header>
        <div class="tab-item" @click="$router.push(tab.path)">{{ tab.name }}</div>
      </template>
      <slot :name="'tab-' + i" />
    </b-tab-item>
  </b-tabs> -->
</template>

<!-- <script>
export default {
  name: 'Tabs',
 
  data() {
    return {
      activeTab: this.active || 0,
      tabs: [
        { name: 'Favorite Product', path: '/' },
        { name: 'Coffee', path: '/' },
        { name: 'Non Coffee', path: '/' },
        { name: 'Foods', path: '/' },
        { name: 'Add-on', path: '/' },
      ]
    };
  },

  watch: {
    active: {
      immediate: true,
      handler(val) {
        this.activeTab = val;
      }
    }
  }
};
</script> -->
