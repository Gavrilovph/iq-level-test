import { createStore } from 'vuex'

export default createStore({
  state: {
    modal: false
  },
  getters: {
    modal: (state) => state.modal
  },
  mutations: {
    openModal(state){
      state.modal = true
    },
    closeModal(state){
      state.modal = false
    }
  },
  actions: {
  },
  modules: {
  }
})
