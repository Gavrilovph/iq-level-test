<template>
  <div class="progress__bar">
    <div class="progress__bar-fill" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.progress {
  &__bar {
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 5px;
    overflow: hidden;
    height: 20px;
    margin-bottom: 20px;
    &-fill {
      height: 100%;
      background-color: #4caf50;
      transition: width 0.3s;
    }
  }
}


</style>