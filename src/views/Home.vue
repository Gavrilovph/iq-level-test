<template>
  <main class="home">
    <p class="home__text home__text-upper">Пройдите точный и быстрый</p>
    <h1 class="home__title">Тест на <br> определение <br> IQ</h1>
    <app-button class="home__btn home__btn-test">
      <template #button >Пройти тест</template> 
    </app-button>
    <p class="home__text home__text-yelow">И получите рекомендации <br> по развитию своего интеллекта</p>
    <p class="home__text">и улучшению финансового <br> благосостояния и личной жизни</p>
    <button class="home__btn home__btn-details"></button>
    <p class="home__text home__text-details">Подробнее</p>
  </main>
  <section class="quote">

  </section>

</template>

<script>
import AppButton from '../components/AppButton.vue'

export default {
  components: {AppButton}
}
</script>

<style lang="scss" scoped>
.home {
  text-align: center;
  background-image: url(../assets/main_bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 115vh;

  &__title {
    font-family: YesevaOne;
    text-transform: uppercase;
    font-size: 30px;
    color: #FFC700;
    margin-top: 30px;
  };

  &__text {
    padding: 0 30px;
    font-family: PTSerif;
    font-size: 18px;
    color: #ffff;

    &-upper {
      font-size: 18px;
      letter-spacing: 2px;
      padding-top: 35px;
    }

    &-yelow {
      color:#FFC700;
      margin-top: 25px;
    }

    &-details {
      font-size: 8px;
      margin-top: 5px;
    }
  }

  &__btn {
    &-test {
      background-color:#FFC700;
      font-family: Merryweather;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      border-radius: 30px;
      font-size: 14px;
      letter-spacing: 1px;
      margin-top: 200px;
      padding: 13px 30px;
    }

    &-details {
      background-color: transparent;
      background-image: url(../assets/more_btn.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      border: none;
      cursor: pointer;
      width: 16px;
      height: 16px;
      margin-top: 20px;
    }
  }
}

.quote {
  // text-align: center;
  // background-image: url(../assets/);
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;
  // height: 115vh;
}
</style>