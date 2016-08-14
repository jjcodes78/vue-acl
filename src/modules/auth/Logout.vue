<script>
  import notificationService from '../../services/notificationService'
  import authService from '../../services/authService'
  import { HOME_URL, LOGIN_URL } from '../../router/paths'

  export default {

    route: {
      activate (transition) {

        return authService.logout().then(function () {
          authService.remove()
          notificationService.show(notificationService.common.USER_LOGGED_OUT)
          transition.redirect(LOGIN_URL)
        }).catch(function (res) {
          if ( res.status == 500 ) {
            notificationService.show(notificationService.common.CONNECTION_ERROR)
          }
          authService.remove()
          transition.redirect(LOGIN_URL)
        })

      }
    }
  }
</script>

<template>
  <div></div>
</template>


