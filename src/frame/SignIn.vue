<template>
  <div class="sign-in">
    <Header :title="title" />
    <Form :title="title" @noLogin="wrong = true" />
    <div class="footer">
      Don’t have an account yet?
      <router-link class="footer__link" to="/sign-up">Sign Up</router-link>
    </div>
    <div class="wrong">
      Wrong email or password<img
        src="@/assets/img/ico-close.svg"
        @click="wrong = false"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Form from '@/components/Form';

export default {
  name: 'signIn',
  components: {
    Header,
    Form,
  },
  data() {
    return {
      title: this.$route.meta.title,
      wrong: false,
    };
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';
@import '../assets/styles/mixin';

.wrong {
  position: absolute;
  bottom: 17px;
  margin: 0 5%;
  border-radius: 50px;
  background: #ff6683;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  padding: 14px 20%;

  img {
    position: absolute;
    right: 18px;
  }

  @include flex_center;

  @include font(14px, 500, 20px, 'Inter', #ffffff);
}
</style>

