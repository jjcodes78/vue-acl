import Vue from 'vue'
import Vuex from 'Vuex'

// Vuex mutations and states for Services
import auth from '../services/authService/vuex'
import notification from '../services/notificationService/vuex'

// Global mutations and states
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    auth,
    notification
  }
})