<template>
  <button :class="buttonClass" @click="this.$emit('goToTest')">
    <slot name="button"></slot>
  </button>
</template>

<script>

export default {
  props: ['class'],
  emits: ['goToTest'],

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
      &:disabled {
        background-color:#DADADA;
        box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.4);
      }
    }

    &__test {
      position: absolute;
      bottom: 15px;
      transform: translate(-50%, -50%);
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
