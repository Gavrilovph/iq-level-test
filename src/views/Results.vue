<template>
  <section class="results">
    <h2 class="results__title">Ваш результат рассчитан:</h2>
    <p class="results__text">вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 
      15 пунктов отличается от среднего в большую или меньшую сторону!
    </p>
    <p class="results__text results__text-get">
      Скорее получите свой результат!
    </p>
    <p class="results__text results__text-personal">В целях защиты персональных 
      данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
    </p>
    <p class="results__timer">Скорее звоните, запись доступна всего {{таймер}} минут</p>
    <div class="results__request">
      <img class="results__request-img" src="../assets/phone_icon.svg" alt="an icon of phone">
      <button class="results__request-btn"></button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>