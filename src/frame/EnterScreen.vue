<template>
  <div class="start__screen start-screen">
    <Header :title="title" />
    <p class="start-screen__text">Bring your media to the next level!</p>
    <div class="start-screen__btn--wrapper">
      <BtnSignUp />
      <BtnSignIn />
    </div>
    <div class="background-frame">
      <img src="@/assets/img/bg-1.svg" :width="1000" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import BtnSignUp from '@/components/BtnSignUp';
import BtnSignIn from '@/components/BtnSignIn';

export default {
  name: 'Home',
  components: {
    Header,
    BtnSignUp,
    BtnSignIn,
  },
  data() {
    return {
      title: this.$route.meta.title,
    };
  },
  mounted() {},
};
</script>

<style lang="scss">
@import '../assets/styles/variables';
@import '../assets/styles/mixin';

.start-screen__text {
  padding: 5% 14% 0;
  text-align: center;

  @include font(14px, normal, 20px, 'Regular', #3e4462);
}

.start-screen__btn--wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 9%;
  padding: 0 19% 0;
}

.background-frame {
  position: absolute;
  bottom: -5px;
  left: 0;
  z-index: -1;
}
</style>
