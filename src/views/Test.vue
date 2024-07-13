<template>
  <section class="test">
    <the-progress-bar :progress="progress"></the-progress-bar>
    <h2 class="test__title">{{ currentQuestion.question }}</h2>
    <div class="options">
        <div v-for="(option, index) in currentQuestion.options" :key="index" class="option">
          <input
            type="radio"
            :id="`option${index}`"
            :name="`question${currentIndex}`"
            :value="option"
            v-model="selectedOption"
          />
          <label :for="`option${index}`">{{ option }}</label>
        </div>
      </div>
      <app-button
      :disabled="!selectedOption" @click="nextQuestion" 
      style="margin: 0"
      class="btn__primary btn__test"
      >
        <template #button>Далее</template> 
      </app-button>
  </section>
</template>

<script>
import {ref, computed} from 'vue'
import TheProgressBar from '../components/TheProgressBar.vue'
import AppButton from '../components/AppButton.vue'

export default {
setup () {
  const questions = ref([
    {
      question: 'Ваш пол:',
      options: ['Мужчина', 'Женщина']
    },
    {
      question: 'Укажите возраст',
      options: ['До 18','От 18 до 28','От 29 до 35','От 36']
    },
    {
      question: 'Выберите лишнее',
      options: ['Дом','Шалаш','Бунгало','Скамейка','Хижина',]
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
components: {TheProgressBar, AppButton}
}
</script>

<style lang="scss" scoped>
.test {
  position: relative;
  text-align: center;
  background-image: url(../assets/main_low_bg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  color: #ffff;
  &__title { // ToDoo стилизовать title
    
  }
}

</style>