/**
 * Created by squad on 27/07/16.
 */

export default {
  vuex: {
    actions: {
      loadPage({ dispatch }, title, section) {
        dispatch('LOAD_ROUTE', title, section)
      }
    }
  },

  route: {
    activate() {
      this.loadPage(this.$route.title, this.$route.section)
    }
  },

}