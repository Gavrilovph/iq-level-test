<template>
  <the-header>
    <img class="header__icon" src="../assets/rain_bk3.png" alt="a picture of blue brain">
    <h1 class="header__title">Тест на определение IQ</h1>
  </the-header>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
export default {
  components: {TheHeader}
}
</script>

<style lang="scss" scoped>
.header {
    &__title {
    font-family: YesevaOne, sans-serif;
    text-transform: uppercase;
    font-size: 15px;
    color: #FFC700;
    line-height: 14px;
    letter-spacing: 1px;
  }
  &__icon {
    width: 48px;
    margin: 0 12px;
  }
}
</style>