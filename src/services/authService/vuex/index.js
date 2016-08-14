/**
 * Created by squad on 15/07/16.
 */

const SET_USER = 'SET_USER'
const REMOVE_USER = 'REMOVE_USER'
const SET_TOKEN = 'SET_TOKEN'
const REMOVE_TOKEN = 'REMOVE_TOKEN'

const state = {
  token: null,
  user: {},
  permissions: [],
  authenticated: false
}

const mutations = {
  [SET_USER] (state, user, permissions) {
    state.user = user
    state.permissions = permissions
    state.authenticated = true
  },

  [REMOVE_USER] (state) {
    state.user = {}
    state.permissions = []
    state.authenticated = false
  },

  [SET_TOKEN] (state, token) {
    state.token = token
  },

  [REMOVE_TOKEN] (state) {
    state.token = null
  }
}

export default {
  state,
  mutations
}