<script lang="babel">

    import store from './vuex/store'
    import notificationGetters from './services/notificationService/vuex/getters'
    import sidebar from './components/sidebar/sidebar.vue'
    import navbar from './components/navbar.vue'
    import alert from 'vue-strap/src/Alert.vue'

    import notificationService from './services/notificationService'
    import authService from './services/authService'

    import {LOGOUT_URL} from './router/paths'

    export default {

        store,

        vuex: {
            getters: {
                show: notificationGetters.show,
                notificationOptions: notificationGetters.options,
                routeTitle: (state) => {
                    return state.routeTitle
                },
                routeSection: (state) => {
                    return state.routeSection
                },
                navVisible: (state) => {
                  return state.navVisible
                }
            },

          actions: {
            showMenu({dispatch}, visible) {
              dispatch('SHOW_MENU', visible)
            }
          }
        },

        components: {
            sidebar,
            navbar,
            alert
        },

        data () {
            return {
                notificationVisible: false
            }
        },

        methods: {
          toggleNavigation() {
            if( this.isLogged ) {
              this.showMenu(!this.navVisible)
            }
          },

          optionMenuSelected(option) {
            switch (option.id) {
              case 'logout':
                this.$router.go(LOGOUT_URL)

            }
          }
        },

        watch: {
            show (val) {
                this.notificationVisible = val
            },

            notificationVisible (val) {
                if(!val) {
                    notificationService.hide()
                }
            },

            isLogged(val) {
              this.showMenu(val)
            }
         },

        computed: {
            isLogged () {
                return authService.isLoggedIn()
            },
            user () {
                return authService.getUser()
            }
        }
    }
</script>

<template>
    <div id="app">
        <alert name="apiErrorAlert"
               :show.sync="notificationVisible"
               :duration="notificationOptions.duration || 3000"
               :type="notificationOptions.type || 'success' "
               width="400px"
               placement="top-right"
               dismissable
               style="z-index: 9999"
        >
            <i :class="notificationOptions.icon"></i>
            <strong>{{ notificationOptions.title }}</strong>
            <p>{{ notificationOptions.message }}</p>
            <small><em>{{ notificationOptions.description }}</em></small>
        </alert>
        <div class="container-fluid">
            <!--<navbar :visible="isLogged" :user="user"></navbar>-->
            <div class="row">
              <!-- normal collapsible navbar markup -->
              <sidebar :visible="navVisible"></sidebar>

                <div class="no-padding Vue__fixed-top" :class="{ 'col-md-10': navVisible, 'col-md-12': !isLogged || !navVisible }">
                    <!-- MAIN APP BAR -->
                    <ui-toolbar color="primary"
                                type="colored"
                                text-color="white"
                                :show-brand="true"
                                :brand="routeTitle"
                                :title="routeSection"
                                @nav-icon-clicked="toggleNavigation"
                    >
                        <div slot="actions" v-show="isLogged">
                          <!-- NOTIFICATIONS -->
                          <ui-icon-button icon="warning"
                                          color="white"
                                          type="clear"
                                          tooltip="Avisos"
                          >
                          </ui-icon-button>
                          <ui-icon-button icon="chat"
                                          color="white"
                                          type="clear"
                                          tooltip="Mensagens"
                          >
                          </ui-icon-button>
                          <!-- VERT MENU -->
                            <ui-icon-button icon="more_vert"
                                            color="white"
                                            type="clear"
                                            dropdown-position="bottom right"
                                            :has-dropdown-menu="true"
                                            :show-menu-icons="true"
                                            :menu-options="[
                                              { id: 'profile', text: 'Perfil', icon: 'account_box' },
                                              { id: 'calls', text: 'Novo Aviso', icon: 'warning' },
                                              { id: 'messages', text: 'Nova Mensagem', icon: 'message' },
                                              { type: 'divider' },
                                              { id: 'logout', text: 'Sair', icon: 'exit_to_app' }
                                            ]"
                                            @menu-option-selected="optionMenuSelected"
                            >
                            </ui-icon-button>
                          <!-- AVATAR AND USER NAME -->
                          <div style="padding: 8px;">
                            <img src="https://avatars2.githubusercontent.com/u/12722518?v=3&s=460"
                                 class="img-circle"
                                 width="36"
                                 height="36"
                            >
                          </div>
                          <span style="padding-right: 16px; padding-top: 12px;">{{ user.name }}</span>
                        </div>
                    </ui-toolbar>

                    <!-- your page content -->
                    <div class="well-lg Vue__bg">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style type="stylus">

  body{
    background-color: #EEEEEE;
  }

  .btn.Vue__btn {
        outline: none
  }

  .Vue__to-front {
      z-index: 9998;
  }

  .no-padding {
    padding-left: 0;
    padding-right: 0;
  }

  .Vue__clickable {
    cursor: pointer;
  }

  .ui-button-icon {
    font-size: 24px;
  }

</style>