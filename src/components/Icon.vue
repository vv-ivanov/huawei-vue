<template>
  <a :href="link" v-if="link">
    <svg class="icon">
      <use :xlink:href="href"></use>
    </svg>
  </a>

  <svg v-else class="icon">
    <use :xlink:href="href"></use>
  </svg>
</template>
<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    },
    href: {
      type: String
    }
  }
};
</script>
<style lang="scss">
@import "../scss/main.scss";

.icon {
  width: 22px;
  height: 22px;

  use {
    fill: $color-white;
    transition: all 0.4s ease;
  }

  &:hover use {
    fill: $color-pink;
  }
}
</style>

