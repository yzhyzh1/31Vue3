import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[] //用户数组

  },
  mutations: {
    addUser(state,obj){
      state.user.push(obj);
    }
  },

  actions: {}
})