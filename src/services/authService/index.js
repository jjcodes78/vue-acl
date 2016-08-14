/**
 * Created by squad on 16/07/16.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'
import store from '../../vuex/store'
import { API_AUTH_URL, API_LOGOUT_URL, API_USER_PROFILE_URL } from '../../router/paths'

Vue.use(VueResource)

/**
 * Se o login for bem sucedido obtém-se o profile do usuário logado
 * e retorna a Promise com o resultado
 */
const getUserProfile = function() {
  return Vue.http({
    url: API_USER_PROFILE_URL,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwt-token'),
    }
  })
}

const login = function (body) {
  return Vue.http({
    url: API_AUTH_URL,
    method: "POST",
    body: body,
  })
}

const logout = function () {
  return Vue.http({
    url: API_LOGOUT_URL,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwt-token')
    }
  })
}

const setToken = function (token) {
  localStorage.setItem('jwt-token', token)
  store.dispatch('SET_TOKEN', token)
}

const setUser = function (user, permissions) {
  store.dispatch('SET_USER', user, permissions)
}

const set = function (type, value) {
  switch (type) {
    case 'token':
      setToken(value)
      break
    case 'user':
      setUser(value.user, value.permissions)
      break
  }
}

const remove = function () {
  localStorage.removeItem('jwt-token')
  localStorage.removeItem('from')
  store.dispatch('REMOVE_TOKEN')
  store.dispatch('REMOVE_USER')
}

const getToken = function () {
  return store.state.auth.token
}

const getUser = function () {
  return store.state.auth.user
}

const getAllPermissions = function () {
  return store.state.auth.permissions
}

const hasPermission = function (permission) {
  return store.state.auth.permissions.indexOf(permission) > -1
}

const isLoggedIn = function () {
  return store.state.auth.authenticated
}

const revokePermission = function(permission) {
  store.state.auth.permissions.$remove(permission)
}

const grantPermission = function (permission) {
  store.state.auth.permissions.push(permission)
}

export default {
  getUserProfile,
  login,
  logout,
  set,
  remove,
  isLoggedIn,
  setToken,
  setUser,
  getToken,
  getUser,
  getAllPermissions,
  hasPermission,
  revokePermission,
  grantPermission
}