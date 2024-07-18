<template>
  <the-modal v-if="modal"></the-modal>
  <the-header>
    <img class="header__icon" src="../assets/rain_bk3.png" alt="a picture of blue brain">
    <h1 class="header__title" v-if="isTestPath">Тест на определение IQ</h1>
    <h1 class="header__title header__results-title" v-else>ГОТОВО!</h1>
  </the-header>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import TheHeader from '../components/TheHeader.vue'
import TheModal from '../components/TheModal.vue'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const modal = computed(() => store.getters.modal)

    const isTestPath = computed(() => {
      return route.path === '/test';
    });

    return { modal, isTestPath }
  },
  components: { TheHeader, TheModal }
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

  &__results {
    &-title{
      font-size: 20px;
      margin-left: 25px;
    }
  }

  &__icon {
    width: 48px;
    margin: 0 12px;
  }
}
</style>