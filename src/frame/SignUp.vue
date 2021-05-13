<template>
  <div class="sign-up">
    <Header :title="title" />
    <Form :title="title" />
    <div class="footer">
      Already have an account?
      <router-link class="footer__link" to="/sign-in">Sign In</router-link>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Form from '@/components/Form';

export default {
  name: 'signUp',
  components: {
    Header,
    Form,
  },
  data() {
    return {
      title: this.$route.meta.title,
    };
  },
};
</script>

