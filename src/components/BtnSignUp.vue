<template>
  <router-link class="btn__sign-up" to="/sign-up">Sign Up</router-link>
</template>

<script>
export default {
  name: 'BtnSignUp',
};
</script>

<style lang="scss">
@import '../assets/styles/variables';
@import '../assets/styles/mixin';

.btn__sign-up {
  border-radius: 50px;
  background: #ffffff;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  padding: 14px 20%;

  @include flex_center;

  @include font(14px, 500, 20px, 'Medium', #000000);
}
</style>
