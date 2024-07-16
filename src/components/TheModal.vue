<template>
  <div class="modal">
    <button class="modal__close" @click="closeModal"></button>
    <ul class="modal__list">
      <li class="modal__list-item">
        <router-link class="modal__link" to="/">главная</router-link>
      </li>
      <li class="modal__list-item">
        <router-link class="modal__link" to="/#description">информация о тесте</router-link>
      </li>
      <li class="modal__list-item">
        <router-link class="modal__link" to="/test">пройти тест</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import {useRouter} from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const closeModal = () => store.commit('closeModal')

    router.beforeEach((to, from, next) => {
      if (store.state.modal) {
        store.commit('closeModal');
      }
      next();
    });

    return {
      closeModal
    }
  }

}
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    background-color: #181818;
    background-size:cover;
    width: 100%;
    height: 100%;
    color: #ffff;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-transform: uppercase;
    text-rendering: geometricPrecision;
    z-index: 2;

    &__close {
      background-image: url(../assets/modal_close.svg);
      background-color: transparent;
      border: none;
      position: absolute;
      top: 18px;
      right: 13px;
      width: 28px;
      height: 28px;
      cursor: pointer;
    }
    &__list {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      margin: 110px 0 0 23px;
      gap: 25px;
    }
    &__link {
      text-decoration: none;
      &:visited {
        color: #ffff;
      }
      &:hover {
        color: #F4CE0C;
      }
    }
  }
</style>