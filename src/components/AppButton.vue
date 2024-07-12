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

</style>
