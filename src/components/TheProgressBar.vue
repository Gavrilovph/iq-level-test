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
    width: 300px;
    background-color: hsla(0, 0%, 95%, 0.60);
    border-radius: 5px;
    overflow: hidden;
    height: 11px;
    margin: 20px auto 15px;
    position: relative;
    top: 40px;
    &-fill {
      background-color: #3BDE7C;
      height: 100%;
      transition: width 0.3s;
      border-radius: 5px;
    }
  }
}


</style>