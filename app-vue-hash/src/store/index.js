import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    microNum: 1
  },
  mutations: {
    SET_MICRO_NUM: (state, num) => {
      state.microNum = num
    }
  },
  actions: {
    setMicroNum ({ commit }, num) {
      commit('SET_MICRO_NUM', num)
    }
  },
  modules: {
  }
})
