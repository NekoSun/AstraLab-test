<template>
  <div class="main">
    <Header :title="`Hello, ${User.name}`" class="main__heder" />
    <div class="background-frame">
      <img src="@/assets/img/bg-2.svg" :width="1000" />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import { mapGetters } from 'vuex';

export default {
  name: 'signIn',
  components: {
    Header,
  },
  data() {
    return {
      title: this.$route.meta.title,
    };
  },
  computed: {
    ...mapGetters(['User']),
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';
@import '../assets/styles/mixin';

.main {
  &__heder {
    padding-top: 40%;
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
}
</style>
