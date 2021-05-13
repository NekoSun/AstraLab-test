<template>
  <button @click="$emit('click')" :disabled="disabled" :class="disabled ? 'btn__send btn__send--disabled' : 'btn__send'">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BtnSend',
  props: {
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';
@import '../assets/styles/mixin';

.btn__send {
  margin-top: 10%;
  border-radius: 50px;
  background: #1e1a3e;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;
  padding: 14px 20%;
  width: 100%;



  @include flex_center;

  @include font(14px, 500, 20px, 'Medium', #ffffff);
}

.btn__send.btn__send--disabled {
  background: rgba(30, 26, 62, .4);;
}
</style>
