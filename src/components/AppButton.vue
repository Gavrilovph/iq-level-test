<template>
  <button :class="buttonClass">
    <slot name="button"></slot>
  </button>
</template>

<script>
import { defineProps } from 'vue'

export default {
  props: ['class'],

  setup(props) {
  const buttonClass = props.class

    return {
      buttonClass
    }
  }
}

</script>

<style lang="scss" scoped>
  .btn {
    &__primary {
      background-color:#FFC700;
      font-family: Merryweather, sans-serif;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      width: 200px;
      border-radius: 30px;
      font-size: 14px;
      letter-spacing: 1px;
      margin-top: 200px;
      padding: 13px 30px;
    }

    &__transparent {
      background-color: transparent;
      font-family: Merryweather, sans-serif;
      text-transform: uppercase;
      border: 1px solid white;
      border-color: #ffff;
      cursor: pointer;
      width: 200px;
      border-radius: 30px;
      font-size: 14px;
      letter-spacing: 1px;
      margin-top: 200px;
      padding: 13px 30px;
      color: #ffff;
    }
  }
</style>
