<template>
  <section class="results">
    <h2 class="results__title">Ваш результат рассчитан:</h2>
    <p class="results__text">Вы относитесь к 3% респондентов, чей уровень интеллекта более чем на 
      <br>15 пунктов отличается от среднего в большую или меньшую сторону!
    </p>
    <p class="results__text results__text-get">
      Скорее получите свой результат!
    </p>
    <p class="results__text results__text-personal">В целях защиты персональных 
      данных результаты теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
    </p>
    <p class="results__timer">Звоните скорее, запись доступна всего <br><span class="results__timer-span">{{ timeLeft > 0 ? (minutes + ':' + seconds) : '00:00' }}</span> минут</p>
    <div class="results__request">
      <img class="results__request-img" src="../assets/phone_icon.svg" alt="an icon of a phone">
      <button class="results__request-btn" type="button" @click="fetchData">
        Позвонить и прослушать результат 
      </button>
    </div>
    <img class="results__lightning results__lightning-left" src="../assets/results_lightning_left.png" alt="image of a lightning" >
    <img class="results__lightning results__lightning-right" src="../assets/results_lightning_right.png" alt="image of a lightning" >
    <div>
      <div class="results__data" v-if="data">
        <p><strong>Имя:</strong> {{ data.name }}</p>
        <p><strong>Рост:</strong> {{ data.height }} см</p>
        <p><strong>Масса:</strong> {{ data.mass }} кг</p>
        <p><strong>Цвет волос:</strong> {{ data.hair_color }}</p>
        <p><strong>Цвет кожи:</strong> {{ data.skin_color }}</p>
        <p><strong>Цвет глаз:</strong> {{ data.eye_color }}</p>
        <p><strong>Год рождения:</strong> {{ data.birth_year }}</p>
        <p><strong>Пол:</strong> {{ data.gender }}</p>
        
        <!-- Did not display this fields. It seemed weird for the test -->
        
        <!-- <p><strong>Дата создания:</strong> {{ data.created }}</p>
        <p><strong>Дата редактирования:</strong> {{ data.edited }}</p>
        <p><strong>URL:</strong> <a :href="data.url" target="_blank">{{ data.url }}</a></p> -->
        
        <div v-if="homeworld">
          <p><strong>Родная планета:</strong> {{ homeworld.name }}</p>
        </div>
        
        <div v-if="films.length">
          <p><strong>Фильмы:</strong></p>
          <ul>
            <li v-for="(film, index) in films" :key="index">{{ film.title }}</li>
          </ul>
        </div>
        
        <div v-if="vehicles.length">
          <p><strong>Транспортные средства:</strong></p>
          <ul>
            <li v-for="(vehicle, index) in vehicles" :key="index">{{ vehicle.name }}</li>
          </ul>
        </div>
        
        <div v-if="starships.length">
          <p><strong>Звездолеты:</strong></p>
          <ul>
            <li v-for="(starship, index) in starships" :key="index">{{ starship.name }}</li>
          </ul>
        </div>
        
        <div v-if="species.length">
          <p><strong>Виды:</strong></p>
          <ul>
            <li v-for="(specie, index) in species" :key="index">{{ specie.name }}</li>
          </ul>
        </div>
      </div>
    </div>
    <p 
      :class="{'results__terms': true, 'results__terms-data': data}"
      >TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU <br>DE DIVERTISMENT. PRIN FOLOSIREA LUI <br>DECLARATI CA AVETI 18 ANI IMPLINITI
    </p>
  </section>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'

export default {
  setup(){
    const data = ref(null)
    const homeworld = ref(null)
    const films = ref([])
    const vehicles = ref([])
    const starships = ref([])
    const species = ref([])
    const endTime = ref(localStorage.getItem('endTime') || new Date().getTime() + 10 * 60 * 1000)
    const timeLeft = ref(endTime.value - new Date().getTime())

    //start fetch
    const fetchData = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/1/')
        const result = await response.json()
        data.value = result

        if (result.homeworld) {
          const homeworldResponse = await fetch(result.homeworld)
          homeworld.value = await homeworldResponse.json()
        }

        if (result.films) {
          const filmPromises = result.films.map(url => fetchResource(url))
          films.value = await Promise.all(filmPromises)
        }

        if (result.vehicles) {
          const vehiclePromises = result.vehicles.map(url => fetchResource(url))
          vehicles.value = await Promise.all(vehiclePromises);
        }

        if (result.starships) {
          const starshipPromises = result.starships.map(url => fetchResource(url))
          starships.value = await Promise.all(starshipPromises)
        }

        if (result.species) {
          const speciesPromises = result.species.map(url => fetchResource(url))
          species.value = await Promise.all(speciesPromises)
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error)
      }
    };

    const fetchResource = async (url) => {
      try {
        const response = await fetch(url)
        return await response.json()
      } catch (error) {
        console.error('Ошибка при получении ресурса:', error)
        return null
      }
    };
    // end fetch

    const minutes = computed(() => {
      const mins = Math.floor((timeLeft.value % (1000 * 60 * 60)) / (1000 * 60))
      return mins < 10 ? `0${mins}` : mins;
    });

    const seconds = computed(() => {
      const secs = Math.floor((timeLeft.value % (1000 * 60)) / 1000)
      return secs < 10 ? `0${secs}` : secs;
    });

    let interval;

    const startCountdown = () => {
      interval = setInterval(() => {
        timeLeft.value = endTime.value - new Date().getTime();
        if (timeLeft.value <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    };

    onMounted(() => {
      startCountdown()
    });

    onUnmounted(() => {
      clearInterval(interval);
      localStorage.setItem('endTime', endTime.value); // save timer count
    });

    return{
      minutes,
      seconds,
      timeLeft,
      data,
      homeworld,
      films,
      vehicles,
      starships,
      species,
      fetchData
    }
  }

}
</script>

<style lang="scss" scoped>
.results{
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items:center;
  text-align: center;
  color: #ffff;
  text-rendering: geometricPrecision;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-image: url('../assets/main_low_bg.png');
    background-repeat: repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
  }

  &__title {
    font-family: PTSerif, sans-serif;
    font-size: 15px;
    line-height: 16px;
    color: #ffff;
    text-transform: uppercase;
    margin-top: 30px;
    font-weight: 800;
    letter-spacing: 1px;
  }
  &__text{
    font-size: 14px;
    line-height: 18px;
    max-width: 268px;
    &-get{
      font-size: 18px;
      line-height: 22px;
      text-transform: uppercase;
      color: #3BDE7C;
      margin-top: 15px;
      font-weight: 800;
    }
    &-personal{
      margin-top: 15px;
      font-family: Roboto, sans-serif;
      font-size: 8px;
      letter-spacing: 1px;
      font-weight: 500;
      padding: 15px 12px;
      border-radius: 6px;
      line-height: 14px;
      background-color: #1C2741;
      width: 232px;
      position: relative;
      text-transform: uppercase;
    }
  }
  &__timer{
    font-family: PTSerif, sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 20px;
    color: #3BDE7C;
    margin-top: 10px;
    &-span{
      margin: 0 5px;
      font-size: 20px;
    }
  }
  &__request{
    position: relative;
    z-index: 1;
    display: flex;
    background-color: #EB1B00;
    margin-top: 10px;
    padding: 30px 20px;
    border-radius: 5px;
    gap: 20px;
    width: 80%;
    &-btn{
      font-family: Roboto;
      font-weight: 400;
      background-color: transparent;
      color:#ffff;
      border: none;
      max-width: 200px;
      text-align: start;
      &:active{
        color: #ffffff88;
      }
    }
  }
  &__lightning{
    position: absolute;
    z-index: 0;
    &-left{
      left: 0;
      top: 365px;
    }
    &-right{
      right: 0;
      top: 410px;
    }
  }
  &__terms{
    font-family: Roboto, sans-serif;
    font-size: 7px;
    color: hsla(0, 0%, 100%, 0.5);
    width: 95%;
    letter-spacing: 3px;
    margin-top: 145px;
    &-data {
      margin-top: 30px,
    }
  }

  &__data{
  color: #ffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: start;
  font-family: PTSerif, sans-serif;
  font-size: 15px;
  line-height: 16px;
  margin-top: 20px;

  & strong {
    color: #3BDE7C;
  }

  & ul {
    list-style-type: none;
    }
  }
}

</style>