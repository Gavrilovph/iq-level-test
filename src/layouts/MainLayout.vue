<template>
  <the-modal v-if="modal"></the-modal>
  <the-header></the-header>

  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import TheHeader from '../components/TheHeader.vue'
import TheModal from '../components/TheModal.vue'
export default {
  setup() {
    const store = useStore()
    const modal = computed(() => store.getters.modal)

    return {modal}
  },
  components: { TheHeader, TheModal }
}
</script>

<style lang="scss" scoped>

</style>