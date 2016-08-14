/**
 * Created by squad on 19/07/16.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const all = function (url, params) {
  return Vue.http({
    url: url,
    params: params,
    method: "GET",
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwt-token'),
    },
  })
}

const get = function (url) {
  return Vue.http({
    url: url,
    method: "GET",
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwt-token'),
    },
  })
}

const create = function (url, data) {
  return Vue.http({
    url: url,
    method: "POST",
    body: data,
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwt-token')
    }
  })
}

const show = function (url, id, params) {
  return Vue.http({
    url: url + '/' + id,
    params: params,
    method: "GET",
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwt-token')
    }
  })
}

const update = function (url, id, data) {
  return Vue.http({
    url: url + '/' + id,
    body: data,
    method: "PUT",
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwt-token')
    }
  })
}

const destroy = function (url, ids) {
  return Vue.http({
    url: url,
    body: {
      items: ids
    },
    method: "DELETE",
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('jwt-token')
    }
  })
}

const list = function (url, column, key, params) {
  let hasKey = (key) ? '/' + key : ''
  return Vue.http({
    url: url + '/' + column + hasKey,
    params: params,
    method: 'GET'
  })
}

export default {
  all,
  show,
  create,
  update,
  destroy,
  list,
  get
}
