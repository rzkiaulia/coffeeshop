<template>
  <component :is="svgIcon"></component>
</template>

<script>
export default {
  name: 'SvgIcon',

  props: {
    icon: { type: String, required: true }
  },

  computed: {
    svgIcon() {
      return () => import(`@/assets/icons/${this.icon}.svg?inline`);
    }
  }
};
</script>
