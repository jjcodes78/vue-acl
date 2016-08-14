/**
 * Created by squad on 27/07/16.
 */

const LOAD_ROUTE  = 'LOAD_ROUTE'
const SHOW_MENU   = 'SHOW_MENU'

const mutations = {
  [LOAD_ROUTE](state, title, section) {
    state.routeTitle = title
    state.routeSection = section
  },
  [SHOW_MENU] (state, visible) {
    state.navVisible = visible
  }
}

export default mutations