<template>
  <section class="test">
    <the-progress-bar :progress="progress"></the-progress-bar>
    <div class="test__container">
      <h2 
      :class="['test__title', dynamicTitleClass]" 
      >{{ currentQuestion.question.title }}</h2> 
      <img 
        v-if="currentQuestion.atributes.url !== ''" 
        :class="currentQuestion.classes.img"
        :src="currentQuestion.atributes.url" 
        :alt="currentQuestion.atributes.alt" 
      >
      <div 
        :class="[{'test__options': dynamicOptionsClass === ''}, dynamicOptionsClass]">
        <div 
          :class="[
            {
              'test__option': dynamicOptionClass === '',
              'selected': selectedOption === option
            },
            dynamicOptionClass
          ]"
          :style="`background-color: ${option}`"
          v-for="(option, index) in currentQuestion.options" :key="index"
          >
          <label 
          :class="[
            'test__label',
            dynamicLabelClass
          ]" 
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
            :class="[
              {'test__span': dynamicSpanClass === '' },
              dynamicSpanClass
            ]"
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
        question: {title: 'Ваш пол:'},
        atributes: {url: '', alt: ''},
        classes: {title: 'test__gender', options: '', option: '', label: '', span: ''},
        options: ['Мужчина', 'Женщина']
      },
      {
        question: {title: 'Укажите ваш возраст:'},
        atributes: {url: '', alt: ''},
        classes: {title: 'test__gender', options: '', option: '', label: '', span: ''},
        options: ['До 18', 'От 18 до 28', 'От 29 до 35', 'От 36']
      },
      {
        question: {title: 'Выберите лишнее:'},
        atributes: {url: '', alt: ''},
        classes: {title: 'test__extra', options: '', option: '', label: '', span: ''},
        options: ['Дом', 'Шалаш', 'Бунгало', 'Скамейка', 'Хижина',]
      },
      {
        question: {title: 'Продолжите числовой ряд:  18  20  24  32'},
        atributes: {url: '', alt: ''},
        classes: {title: 'test__continue', options: '', option: '', label: '', span: ''},
        options: ['62', '48', '74', '57', '60', '77']
      },
      {
        question: {title: 'Выберите цвет, который сейчас наиболее вам приятен:'},
        atributes: {url: '', alt: ''},
        classes: {title:'', options: 'test__options-squares', option: 'test__option-squares', label: 'test__label-squares', span: 'test__span-squares'},
        options: ['#A8A8A8', '#0000A9', '#00A701', '#F60100', '#FDFF19', '#A95403', '#000000', '#850068', '#46B2AC']
      },
      {
        question: {title: 'Отдохните пару секунд, еще раз выберите цвет, который сейчас наиболее вам приятен:'},
        atributes: {url: '', alt: ''},
        classes: {title:'test__squares', options: 'test__options-squares', option: 'test__option-squares', label: 'test__label-squares', span: 'test__span-squares'},
        options: ['#A8A8A8', '#46B2AC', '#A95403', '#00A701', '#000000', '#F60100', '#850068', '#FDFF19', '#0000A9']
      },
      {
        question: {title:'Какой из городов лишний?'},
        atributes: {url: '', alt: ''},
        classes: {title:'test__city', options: '', option: '', label: '', span: ''},
        options: ['Вашингтон', 'Лондон', 'Париж', 'Нью-Йорк', 'Москва', 'Оттава']
      },
      {
        question: {title:'Выберите правильную фигуру из четырёх пронумерованных.'},
        atributes: {url: '/assets/figures.png', alt: 'test picture of figures'},
        classes: {title:'test__figure', options: 'test__options-figures', option: 'test__option-figures', label: 'test__label-figures', span: 'test__span-figures', img: 'test__figures'},
        options: ['1', '2', '3', '4']
      },
      {
        question: {title:'Вам привычнее и важнее:'},
        atributes: {url: '', alt: ''},
        classes: {title: 'test__important', options: '', option: '', label: '', span: ''},
        options: ['Наслаждаться каждой минутой проведенного времени', 'Быть устремленными мыслями в будущее', 'Учитывать в ежедневной практике прошлый опыт']
      },
      {
        question: {title:'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:'},
        atributes: {url: '/assets/pyramid.png', alt: 'test picture of a pyramid'},
        classes: {title:'test__geometric', options: '', option: '', label: '', span: '', img: 'test__pyramid'},
        options: ['Оно остроконечное', 'Оно устойчиво', 'Оно находится в состоянии равновесия']
      },
      {
        question: {title:'Вставьте подходящее число:'},
        atributes: {url: '/assets/star.png', alt: 'test picture of a star with numbers'},
        classes: {title:'test__stars', options: 'test__options-star', option: 'test__option-star', label: 'test__label-star', span: 'test__span-star',img: 'test__star'},
        options: ['34', '36', '53', '44', '66', '42']
      }
    ])

    const currentIndex = ref(0)
    const selectedOption = ref(null)

    let progress = computed(() => (currentIndex.value / questions.value.length) * 100)
    const currentQuestion = computed(() => questions.value[currentIndex.value])

    // Classes
    const dynamicTitleClass = computed(() => currentQuestion.value.classes.title)
    const dynamicOptionsClass = computed(() => currentQuestion.value.classes.options)
    const dynamicOptionClass = computed(() => currentQuestion.value.classes.option)
    const dynamicLabelClass = computed(() => currentQuestion.value.classes.label)
    const dynamicSpanClass = computed(() => currentQuestion.value.classes.span)

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
      nextQuestion,
      dynamicTitleClass,
      dynamicOptionsClass,
      dynamicOptionClass,
      dynamicSpanClass,
      dynamicLabelClass
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
  width: 100%;
  height: 100vh;
  top: 0;
  color: #ffff;
  text-rendering: geometricPrecision;


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
    width: 240px;
  }

  &__pyramid {
    width: 173px;
    height: 115px;
    margin-bottom: 20px;
  }

  &__star {
    width: 228px;
    height: 207px;
  }

//dynamicTitles
  &__squares {
    width: 255px;
    font-size: 19px;
    margin-top: -30px;
  }

  &__geometric {
    font-size: 17px;
    margin: 5px 0 25px;
  }

  &__stars {
    font-size: 24px;
  }

  &__gender {
    margin: -24px 0 50px;
  }

  &__age {
    margin: -24px 0 50px;
  }

  &__extra {
    margin: -24px 0 50px;
  }
  &__continue {
    line-height: 31px;
    width: 270px;
    margin: 20px 0 30px;
  }

  &__city {
    width: 250px;
    margin: 20px 0 30px;
  }

  &__important {
    margin: 0 0 40px;
  }

//options
  &__options {
    position: relative;
    display: flex;
    flex-direction: column;
    text-align: start;
    align-self: normal;
    gap: 10px;

    &-figures,&-star {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      gap: 8px;
      color: #000000;
    }

    &-figures {
      gap: 0px;
    }

    &-squares {
      display: flex;
      justify-content: center;
      gap: 20px;
      width: 320px;
      flex-wrap: wrap;
      text-align: center;
      margin: 40px 0 -10px;
      transform: scale(1.2);
    }

    &-star {
      margin-top: 25px;
      border-top: 5px solid hsla(180, 4%, 95%, 0.15);
      gap: 0;
    }
  }

  &__option {
    background-color: hwb(180 95% 5% / 0.15);
    padding: 15px 10px;
    &.selected {
    background-color: #FFC700;
    color: #000000;
    }
    &-figures,&-star {
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
    &-squares {
      width: 75px;
      height: 75px;
      color: transparent;
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
    min-width: 20px;
    width: 20px;
    height: 20px;
    border: 1px solid #ffff;
    border-radius: 50%;
    position: relative;
    margin: 0 35px 0 25px;
    cursor: pointer;
  }

  &__label {
    display: flex;
    font-size: 18px;
    align-items: center;

    &-squares {
      width: 100%;
      height: 100%;
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