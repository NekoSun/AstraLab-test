<template>
  <div>
    <div class="form">
      <div class="form__input--wrapper" v-if="title === 'Sign Up'">
        <label class="form__label">Full name</label>
        <input
          class="form__input"
          type="text"
          v-model.trim="name"
          :class="{
            invalid: $v.name.$dirty && !$v.name.required,
          }"
        />
      </div>
      <div class="form__input--wrapper">
        <label class="form__label">Email</label>
        <input
          v-model.trim="email"
          class="form__input"
          type="text"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        />
        <small
          v-if="
            ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email)
          "
          class="helper__title"
          >Enter valid email</small
        >
      </div>
      <div class="form__input--wrapper">
        <PassHelp v-if="title === 'Sign Up'" class="form__input--position" />
        <label class="form__label">Password</label>
        <div class="form__input--icon">
          <img
            @click="togglePassIcon = !togglePassIcon"
            :src="
              !togglePassIcon
                ? require('@/assets/img/ico-pass-cl.svg')
                : require('@/assets/img/ico-pass-op.svg')
            "
          />
          <input
            class="form__input form__input--icon"
            :type="!togglePassIcon ? 'password' : 'text'"
            v-model.trim="password"
            :class="{
              invalid:
                ($v.password.$dirty && !$v.password.required) ||
                ($v.password.$dirty && !$v.password.minLength) ||
                ($v.password.$dirty && !$v.password.valid),
            }"
          />
        </div>
        <small
          v-if="
            ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength) ||
            ($v.password.$dirty && !$v.password.valid)
          "
          class="helper__title"
          >Enter sorted password</small
        >
      </div>
      <div class="form__input--wrapper" v-if="title === 'Sign Up'">
        <label class="form__label">Repeat password</label>
        <div class="form__input--icon">
          <img
            @click="togglePassIconRepeat = !togglePassIconRepeat"
            :src="
              !togglePassIconRepeat
                ? require('@/assets/img/ico-pass-cl.svg')
                : require('@/assets/img/ico-pass-op.svg')
            "
          />
          <input
            class="form__input"
            :type="!togglePassIconRepeat ? 'password' : 'text'"
            v-model="passwordRepeat"
            :class="{
              invalid:
                ($v.passwordRepeat.$dirty && !$v.passwordRepeat.required) ||
                ($v.passwordRepeat.$dirty && !$v.passwordRepeat.sameAs),
            }"
          />
        </div>
      </div>
      <BtnSend @click="submitHandler()" :text="title" :disabled="disabled" />
    </div>
  </div>
</template>

<script>
import { email, required, minLength, sameAs } from 'vuelidate/lib/validators';
import BtnSend from '@/components/BtnSend';
import PassHelp from '@/components/PassHelp';
import { mapActions } from 'vuex';

export default {
  name: 'Form',
  components: {
    BtnSend,
    PassHelp,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      togglePassIcon: false,
      togglePassIconRepeat: false,
      email: '',
      name: '',
      password: '',
      passwordRepeat: '',
      disabled: false,
    };
  },
  watch: {
    name() {
      if (this.disabled) {
        this.disabled = false
      }
    },
    email() {
      if (this.disabled) {
        this.disabled = false
      }
    },
    password() {
      if (this.disabled) {
        this.disabled = false
      }
    },
    passwordRepeat() {
      if (this.disabled) {
        this.disabled = false
      }
    },
  },
  validations: {
    name: {
      name,
      required,
    },
    email: { email, required },
    password: {
      required,
      minLength: minLength(8),
      valid: function (value) {
        const containsUppercase = /^(?:[^A-ZА-ЯЁ\n]*[A-ZА-ЯЁ]){0,2}[^A-ZА-ЯЁ\n]*$/.test(
          value
        );
        const containsSpecial = /[#?!@$%^&*-]/.test(value);
        return containsUppercase && containsSpecial;
      },
    },
    passwordRepeat: {
      required,
      sameAs: sameAs('password'),
    },
  },
  methods: {
    ...mapActions(['getUser']),
    submitHandler() {
      if (this.title === 'Sign Up') {
        if (this.$v.$invalid) {
          this.$v.$touch();
          this.disabled = true
          return;
        }
        const data = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        this.getUser(data);
        this.$router.push({ path: '/main' });
      }

      if (this.title === 'Sign In') {
        if (this.$v.email.$invalid || this.$v.password.$invalid) {
          this.$v.$touch();
          this.disabled = true
          return;
        }
        const trueData = {
          name: 'John Doe',
          email: 'example@acme.com',
          password: 'q12W@Q3eqw',
        }

        if (
          trueData.email !== this.email ||
          trueData.password !== this.password
        ) {
          this.$emit('noLogin');
          this.disabled = true
        } else {
          this.getUser(trueData);
          this.$router.push({ path: '/main' });
        }
      }
    },
  },
};

</script>


<style lang="scss">
@import '../assets/styles/variables';
@import '../assets/styles/mixin';

.form {
  margin: 6% 5% 0;
  padding: 0 22px;
  padding-top: 28px;
  padding-bottom: 17px;
  background-color: #ffffff;

  border-radius: 40px;

  &__label {
    padding-left: 18px;
    @include font(12px, 600, 20px, 'SemiBold', rgba(0, 0, 0, 0.8));
  }

  &__input {
    width: 100%;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 18px;
    padding-right: 15px;
    background-color: #f3f3fa;
    border-radius: 50px;
    @include font(14px, normal, 20px, 'Regular', rgba(0, 0, 0, 0.8));

    &--wrapper {
      position: relative;
      padding-bottom: 24px;
    }

    &--position {
      right: 18px;
    }

    &--icon,
    &--icon-repeat {
      position: relative;

      img {
        position: absolute;
        right: 14px;
        top: 9px;
        z-index: 1;
      }
    }
  }
  &__input.invalid {
    background-color: rgba(100%, 40%, 51%, 0.2);
  }

  .helper__title {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 7px;
    padding-left: 19px;
    color: #ff6683;
  }
}
</style>
