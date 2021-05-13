<template>
  <div class="btn__pass-help">
    <button @click="help = !help">
      <img src="@/assets/img/ico-pass-help.svg" width="12" height="12" />
    </button>
    <div v-if="help" class="btn__pass-help--text" @click="help = !help">
      Password must contain 8+ symbols, 1 special and 2 capital letters
    </div>
  </div>
</template>

<script>
export default {
  name: 'PassHelp',
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
  data() {
    return {
      help: false,
    };
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';
@import '../assets/styles/mixin';

.btn__pass-help {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50px;
  cursor: pointer;
  box-sizing: border-box;
  outline: none;

  &--text {
    position: absolute;
    width: 162px;
    border-radius: 8px;
    background-color: #1e1a3e;
    z-index: 1;
    padding: 11px 6px;
    right: -10px;
    bottom: 22px;
    text-align: center;

    &::before {
      content: '';
      position: absolute;
      border: 12px solid transparent;
      border-top: 12px solid #1e1a3e;
      right: 4px;
      bottom: -19px;
    }
    @include font(10px, normal, 14px, 'Inter', #f3f3f3);
  }

  @include flex_center;
}
</style>
