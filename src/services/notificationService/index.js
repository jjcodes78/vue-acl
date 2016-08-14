/**
 * Created by squad on 18/07/16.
 */

import store from '../../vuex/store'
import * as common from './notifications/common'

const show = function (options) {
  store.dispatch('SHOW_NOTIFICATION', options)
}
const hide = function () {
  store.dispatch('HIDE_NOTIFICATION')
}

export default {
  show,
  hide,
  common
}