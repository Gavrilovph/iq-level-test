<template>
  <section class="test">
    <the-progress-bar :progress="progress"></the-progress-bar>
    <div class="test__container">
      <h2 class="test__title">{{ currentQuestion.question }}</h2>
      <img v-if="currentQuestion.img" :src="currentQuestion.img.url" :alt="currentQuestion.img.alt">
      <div class="test__options">
        <div 
          class="test__option"
          v-for="(option, index) in currentQuestion.options" :key="index"
          :class="{ 'selected': selectedOption === option }"
          >
          <label class="test__label" :for="`option${index}`">
            <input
            class="test__input"
            type="radio"
            :id="`option${index}`"
            :name="`question${currentIndex}`"
            :value="option"
            v-model="selectedOption"
            />
            <span class="test__span"></span>
            {{ option }}
          </label>
        </div>
      </div>
  </div>
  <app-button
  :disabled="!selectedOption" @click="nextQuestion" 
  style="margin-top: 0;"
  class="btn__primary btn__test"
  >
    <template #button>Далее</template>
  </app-button>
</section>
</template>

<script>
import { ref, computed } from 'vue'
import TheProgressBar from '../components/TheProgressBar.vue'
import AppButton from '../components/AppButton.vue'

export default {
  setup() {
    const questions = ref([
      {
        question: 'Ваш пол:',
        options: ['Мужчина', 'Женщина']
      },
      {
        question: 'Укажите возраст:',
        options: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36']
      },
      {
        question: 'Выберите лишнее:',
        options: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина',]
      },
      {
        question: 'Продолжите числовой ряд: 18  20  24  32',
        options: ['62', '48', '74', '57', '60', '77']
      },
      {
        question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
        options: ['grey', 'blue', 'green', 'red', 'yellow', 'brown', 'black', 'purple', 'cyan']
      },
      {
        question: 'Какой из городов лишний?',
        options: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
      },
      {
        question: 'Выберите правильную фигуру из четырёх пронумерованных.',
        img: {url: '../assets/figures_img.png', alt: 'test picture of figures', class: 'test__figures'},
        options: ['1', '2', '3', '4']
      },
      {
        question: 'Вам привычнее и важнее:',
        options: ['Наслаждаться каждой минутой', 'Быть устремленными мыслями в будущее', 'Учитывать в ежедневной практике прошлый опыт']
      },
      {
        question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
        img: {url: '../assets/pyramid_img.png', alt: 'test picture of a pyramid', class: 'test__pyramid'},
        options: ['Оно остроконечное', 'Оно устойчиво', 'Оно находится в состоянии равновесия']
      },
      {
        question: 'Вставьте подходящее число:',
        img: {url: '../assets/star_img.png', alt: 'test picture of a star with numbers', class: 'test__star'},
        options: ['34', '36', '53', '44', '66', '42']
      }
    ])

    const currentIndex = ref(0)
    const selectedOption = ref(null)

    let progress = computed(() => (currentIndex.value / questions.value.length) * 100)
    const currentQuestion = computed(() => questions.value[currentIndex.value])


    const nextQuestion = () => {
      if (currentIndex.value < questions.value.length - 1) {
        currentIndex.value++;
        selectedOption.value = null; // Тут резет значения для записи нового
        console.log(progress.value)
        console.log(currentIndex.value)
        console.log(questions.value.length)
      } else if (currentIndex.value = questions.value.length - 1) { //ToDoo дописать прогресс бар, чтобы доконца доходил, тут какая-то трабла в условии, посмотреть. А может переписать иначе
        progress = 100
      } else {
        console.log('ошибка');
      }
    }

    return {
      questions,
      currentIndex,
      selectedOption,
      currentQuestion,
      progress,
      nextQuestion
    }
  },
  components: { TheProgressBar, AppButton }
}
</script>

<style lang="scss" scoped>
.test {
  font-family: PTSerif, sans-serif;
  z-index: -1;
  position: absolute;
  background-image: url(../assets/main_low_bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  padding-top: 17px;
  width: 100%;
  height: 100vh;
  top: 0;
  color: #ffff;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80%;
  }

  &__title { 
    font-size: 20px;
    line-height: 26px;
  }

  &__options {
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: start;
  }

  &__option {
    background-color: hwb(180 95% 5% / 0.15);
    &.selected {
    background-color: #FFC700;
    color: #000000;
    }

  }


  &__span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #ffff;
    border-radius: 50%;
    position: relative;
    vertical-align: middle;
    margin: 0 35px;
    cursor: pointer;
  }

  &__label {
    font-size: 18px;
    line-height: 58px;
  }

  &__label input[type="radio"]:checked + &__span::after {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-color: #2950C2;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__label input[type="radio"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: none;
  }
}

</style>