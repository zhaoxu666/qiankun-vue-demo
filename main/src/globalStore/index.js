import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const globalStore = new Vuex.Store({
  state: {
    num: 2,
    message: 'hellow shared',
    list: [],
    obj: {}
  },    
  mutations: {
    SET_NUM: (state, num) => {
        state.num = num
    },
    SET_MESSAGE: (state, message) => {
        state.message = message
    },
    ADD_LIST: (state, item) => {
        state.list.push(item)
    },
    DELETE_ITEM: (state) => {
        state.list.splice(0, 1)
    },
    ADD_OBJ: (state, obj) => {
        state.obj = {...obj, ...state.obj}
    },
    DELETE_OBJ: (state, key) => {
        Vue.delete(state.obj, key)
    }
  },    
  actions: {
    setNum ({ commit }, num) {
        commit('SET_NUM', num)
    },
    setMessage ({ commit }, message) {
        commit('SET_MESSAGE', message)
    },
    addList ({ commit }, item) {
        commit('ADD_LIST', item)
    },
    deleteItem ({ commit }) {
        commit('DELETE_ITEM')
    },
    addObj ({ commit }, obj) {
        commit('ADD_OBJ', obj)
    },
    deleteObj ({ commit }, key) {
        console.log('key', key)
        commit('DELETE_OBJ', key)
    }
  }
    
})

export default globalStore