<template>
  <main class="home">
    <div class="home__container">
      <p class="home__text home__text-upper">Пройдите точный и быстрый</p>
      <h1 class="home__title">Тест на <br> определение <br> IQ</h1>
    </div>
    <app-button class="btn__primary" @goToTest="toTest">
      <template #button >Пройти тест</template> 
    </app-button>
    <p class="home__text home__text-yellow">И получите рекомендации <br> по развитию своего интеллекта</p>
    <p class="home__text">и улучшению финансового <br> благосостояния и личной жизни</p>
    <button class="home__btn home__btn-details"></button>
    <p class="home__text home__text-details">Подробнее</p>
  </main>
  <section class="description">
    <div class="description__quote description__quote-open"></div>
    <div class="description__quote description__quote-close"></div>
    <div class="description__gradient"></div>
    <p class="description__text">Профессиональный<br>IQ-тест позволяет не <br> только определить <br>коэффициент вашего интеллекта, <br>
      но и выработать список<br> рекомендаций для<br> повышения этого<br> показателя. </p>
  </section>
  <section class="results">
    <div class="results__container">
      <p class="results__text">Также по результатам теста<br>
      <strong class="results__text-uppercase">вы получите</strong> подробные<br> 
      <strong class="results__text-uppercase">советы</strong> по определению наиболее<br> перспективной   <strong class="results__text-uppercase">для вашего<br> типа</strong> <strong>интеллекта</strong> <strong class="results__text-uppercase">сферы<br> деятельности, </strong><br>
      которая принесет вам скорейший<br> финансовый результат.</p>
    </div>
    <img class="results__img" src="../assets/brain_img.png" alt="a brain developing img">
    <app-button class="btn__primary" style="margin: -10px auto 40px;" @goToTest="toTest">
      <template #button >Пройти тест</template> 
    </app-button>
  </section>
  <section class="duration">
    <p class="duration__text">Прохождение теста займет у вас не более <strong class="duration__text-yellow">12 минут</strong>, а его <strong>результаты</strong> вы сможете <strong class="duration__text-yellow">использовать всю жизнь.</strong></p>
    <div class="duration__container"> 
      <p class="duration__container-text">Профессиональная<br> интерпретация и детально <strong> проработанные<br>рекомендации </strong> позволят вам качественно <strong>изменить все<br>аспекты своей жизни:</strong> от финансового до любовного.</p>
    </div>
    <span class="duration__lighting duration__lighting-left"></span>
    <span class="duration__lighting duration__lighting-right"></span>
    <app-button class="btn__transparent" style="margin: 33px 0 52px;" @goToTest="toTest">
      <template #button >Пройти тест</template> 
    </app-button>
    <ul class="duration__list">
      <li class="duration__list-item duration__copyright-icon"></li>
      <li class="duration__list-item duration__copyright">2019</li>
    </ul>
  </section>

</template>

<script>
import AppButton from '../components/AppButton.vue'
import {useRouter} from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const toTest = () => {
      router.push('/test')
    }

    return {
      toTest
    }
  },
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
  height: 765px;

  &__title {
    font-family: YesevaOne, sans-serif;
    text-transform: uppercase;
    font-size: 30px;
    color: #FFC700;
    margin-top: 30px;
    line-height: 35px;
  };

  &__text {
    padding: 0 30px;
    font-family: PTSerif;
    font-size: 18px;
    color: #ffff;
    line-height: 19px;

    &-upper {
      font-size: 18px;
      letter-spacing: 2px;
      padding-top: 35px;
    }

    &-yellow {
      color:#FFC700;
      margin-top: 25px;
    }

    &-details {
      font-size: 10px;
    }
  }

  &__btn {

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

.description {
  position: relative;
  text-align: center;
  background-image: url(../assets/sparkle_bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fix;
  background-size: cover;
  width: 100%;
  height: 339px;
  margin-top: -160px;

  &__text {
    position: relative;
    font-family: YesevaOne, sans-serif;
    color: #ffff;
    padding: 82px 30px 0;
    font-size: 18px;
    letter-spacing: 2px;
    line-height: 23px;
  }

  &__gradient {
    position: absolute;
    background-image: url(../assets/sparkle_gradient.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 0;
    width: 100%;
    height: 340px;
  }

  &__quote{
    position: absolute;
    width: 23px;
    height: 23px;
    z-index: 1;
    &-open{
      text-align: center;
      background-image: url(../assets/open_quote.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      left: 45px;
      top: 40px;

    }

    &-close{
      text-align: center;
      background-image: url(../assets/close_quote.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      right: 50px;
      bottom: 30px;
    }
  }
  
}

.results {
  text-align: center;

  &__container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  &__text {
    font-family: PTSerif, sans-serif;
    text-align: start;
    font-size: 20px;

    &-uppercase {
      text-transform: uppercase;
    }
  }

  &__img {
    width: 270px;
    margin-top: 40px;
  }
}

.duration {
  position: relative;
  text-align: center;
  background-image: url(../assets/main_low_bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 560px;
  &__text {
    font-family: Merryweather, sans-serif;
    text-align: start;
    color: #ffff;
    font-size: 17px;
    width: 288px;
    margin: 0 12px;
    padding-top: 54px;
    letter-spacing: 1px;
    &-yellow {
      color:#FFC700;
    }
  }

  &__container {
    position: relative;
    z-index: 1;
    background-color: hsla(0, 0%, 100%, 0.8);
    border-radius: 20px;
    margin: 30px 12px 0;
    padding: 30px 15px;
    &-text {
      font-family: Merryweather, sans-serif;
      text-align: start;
      color: #181818;
      line-height: 25px;
      font-size: 20px;
    }
  }

  &__lighting {
    position: absolute;
    z-index: 0;
    &-left {
      background-image: url(../assets/lightning_left.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 165px;
      height: 200px;
      left: 0;
      bottom: 44px;
    }

    &-right {
      background-image: url(../assets/lightning_right.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 165px;
      height: 200px;
      right: 0;
      top: 88px;
    }
  }

  &__list {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  &__copyright {
    font-family: Roboto, sans-serif;
    color: hsl(0, 0%, 50%);
    font-size: 10px;
    &-icon {
      background-image: url(../assets/copyright_icon.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 8px;
      height: 8px;
    }
  }
}


</style>