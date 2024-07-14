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
    width: 260px;
    background-color: hsla(0, 0%, 95%, 0.60);
    border-radius: 5px;
    overflow: hidden;
    height: 11px;
    margin: 0 auto;
    &-fill {
      height: 100%;
      background-color: #3BDE7C;
      transition: width 0.3s;
    }
  }
}


</style>