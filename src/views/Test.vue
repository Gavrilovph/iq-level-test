<template>
  <section class="test">
    <the-progress-bar :progress="progress"></the-progress-bar>
    <div class="test__container">
      <h2 class="test__title">{{ currentQuestion.question }}</h2>
      <img 
        v-if="currentQuestion.atributes.url !== ''" 
        :class="currentQuestion.atributes.class"
        :src="currentQuestion.atributes.url" 
        :alt="currentQuestion.atributes.alt" 
      >
      <div 
        :class="{
          'test__options': currentQuestion.atributes.class === '',
          'test__options-figures': currentQuestion.atributes.class === 'test__figures'
        }">
        <div 
          :class="{
            'test__option': currentQuestion.atributes.class === '',
            'selected': selectedOption === option,
            'test__option-figures': currentQuestion.atributes.class === 'test__figures'
          }"
          v-for="(option, index) in currentQuestion.options" :key="index"
          >
          <label 
          :class="{
            'test__label': true,
            'test__label-figures': currentQuestion.atributes.class === 'test__figures'
            }" 
          :for="`option${index}`"
          >
            <input
            class="test__input"
            type="radio"
            :id="`option${index}`"
            :name="`question${currentIndex}`"
            :value="option"
            v-model="selectedOption"
            />
            <span 
            :class="{
              'test__span': currentQuestion.atributes.class === '',
              'test__span-figures': currentQuestion.atributes.class === 'test__figures'
              }"
            ></span>
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
        atributes: {url: '', alt: '', class: ''},
        options: ['Мужчина', 'Женщина']
      },
      {
        question: 'Укажите возраст:',
        atributes: {url: '', alt: '', class: ''},
        options: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36']
      },
      {
        question: 'Выберите лишнее:',
        atributes: {url: '', alt: '', class: ''},
        options: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина',]
      },
      {
        question: 'Продолжите числовой ряд: 18  20  24  32',
        atributes: {url: '', alt: '', class: ''},
        options: ['62', '48', '74', '57', '60', '77']
      },
      {
        question: 'Выберите цвет, который сейчас наиболее Вам приятен:',
        atributes: {url: '', alt: '', class: ''},
        options: ['grey', 'blue', 'green', 'red', 'yellow', 'brown', 'black', 'purple', 'cyan']
      },
      {
        question: 'Какой из городов лишний?',
        atributes: {url: '', alt: '', class: ''},
        options: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
      },
      {
        question: 'Выберите правильную фигуру из четырёх пронумерованных.',
        atributes: {url: 'src/assets/figures.png', alt: 'test picture of figures', class: 'test__figures'},
        options: ['1', '2', '3', '4']
      },
      {
        question: 'Вам привычнее и важнее:',
        atributes: {url: '', alt: '', class: ''},
        options: ['Наслаждаться каждой минутой', 'Быть устремленными мыслями в будущее', 'Учитывать в ежедневной практике прошлый опыт']
      },
      {
        question: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
        atributes: {url: '/assets/pyramid.png', alt: 'test picture of a pyramid', class: 'test__pyramid'},
        options: ['Оно остроконечное', 'Оно устойчиво', 'Оно находится в состоянии равновесия']
      },
      {
        question: 'Вставьте подходящее число:',
        atributes: {url: '/assets/star.png', alt: 'test picture of a star with numbers', class: 'test__star'},
        options: ['34', '36', '53', '44', '66', '42']
      }
    ])

    const currentIndex = ref(6)
    const selectedOption = ref(null)

    let progress = computed(() => (currentIndex.value / questions.value.length) * 100)
    const currentQuestion = computed(() => questions.value[currentIndex.value])

    const nextQuestion = () => {
      if (currentIndex.value < questions.value.length - 1) {
        currentIndex.value++;
        selectedOption.value = null;
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
    align-items: center;
  }

  &__title { 
    width: 313px;
    font-size: 21px;
    line-height: 26px;
    font-weight: 400;
  }

//images
  &__figures {
    margin-top: 20px;
    width: 250px;
  }

  &__pyramid {
    width: 173px;
    height: 115px;
  }

  &__star {
    width: 228px;
    height: 207px;
  }

//options
  &__options {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    text-align: start;
    align-self: normal;

    &-figures {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      gap: 8px;
      color: #000000;

    }
  }

  &__option {
    background-color: hwb(180 95% 5% / 0.15);
    &.selected {
    background-color: #FFC700;
    color: #000000;
    }
    &-figures {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FFFFFF;
      margin-top: 25px;
      width: 44px;
      height: 41px;
      &.selected {
        content: "";
        border: 7px solid #FFC700; /* Устанавливаем ваш цвет и ширину бордюра */
        box-sizing: border-box; /* Учитываем размеры бордюра */
        pointer-events: none; /* Бордюр не будет перехватывать события мыши */
      }
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
    &-figures {
    }
  }

  &__label {
    font-size: 18px;
    line-height: 58px;
    &-figures {
      
    }
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