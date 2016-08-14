/**
 * Created by squad on 29/07/16.
 */

import Login from '../Login.vue'
import Logout from '../Logout.vue'

import {LOGIN_URL, LOGOUT_URL} from '../../../router/paths'

export default {
  [LOGIN_URL]: {
    component: Login,
    guest: true,
    title: 'Login',
    section: ''
  },
  [LOGOUT_URL]: {
    component: Logout,
    auth: true
  },
}