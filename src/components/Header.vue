<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';
@import '../assets/styles/mixin';

.title {
  padding: 22% 18% 0;
  text-align: center;

  @include font(22px, 800, 30px, 'ExtraBold', #181c43);
}
</style>
