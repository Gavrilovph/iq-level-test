<template>
  <header class="header">
    <button class="header__btn" type="button"></button>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: 46px;
  background-color: #181818;
  &__btn {
    margin-left: 16px;
    width: 24px;
    height: 16px;
    background-color: transparent;
    border: none;
    background-image: url(../assets/menu.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
}

</style>