<template>
  <router-link class="btn__sign-in" to="/sign-in">
    <img src="@/assets/img/ico-arrow.svg" width="16" height="13" />
  </router-link>
</template>

<script>
export default {
  name: 'BtnSignIn',
};
</script>

<style lang="scss">
@import '../assets/styles/variables';
@import '../assets/styles/mixin';

.btn__sign-in {
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background: #1e1a3e;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;

  @include flex_center;
}
</style>
