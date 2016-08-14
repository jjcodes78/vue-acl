/**
 * Created by squad on 29/07/16.
 */

import Main from '../Main.vue'
import About from '../About.vue'
import NotFound from '../NotFound.vue'

import { DASHBOARD_URL, ABOUT_URL } from './paths'

export default {
  '*': {
    component: NotFound,
    title: 'Erro',
    section: 'Página não encontrada'
  },
  [DASHBOARD_URL]: {
    component: Main,
    auth: true,
    permission: 'dashboard.index',
    title: 'Dashboard',
    section: 'Visão Geral'
  },
  [ABOUT_URL]: {
    component: About,
    auth: true,
    title: 'Sobre',
    section: ''
  },
}