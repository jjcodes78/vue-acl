<script>
  import sidebar from 'vue-strap/src/Aside.vue'
  import { LOGOUT_URL } from '../router/paths'

  import authService from '../services/authService'
  import notificationService from '../services/notificationService'

  export default {

    props: ['visible', 'user'],

    components: {
      sidebar
    },

    data () {
      return {
        showProfile: false
      }
    },

    computed: {
      profileAvatar () {
        return this.user.avatar_url || 'https://avatars2.githubusercontent.com/u/12722517?v=3&u=18bf882b10e7cde77ce61d35e03e9e01e4c0f151&s=140'
      },

      logoutPath () {
        return {
          path: LOGOUT_URL
        }
      }
    },

    methods: {
      revoke() {
        authService.revokePermission('cliente.edit')
        authService.revokePermission('cliente.delete')
        authService.revokePermission('cliente.create')
        notificationService.show({
          title: 'Ops!!!',
          message: 'Seu acesso a Clientes foi revogado.',
          description: 'Entre em contato com o administrador.',
          type: 'warning'
        })
      },

      grant(){
        authService.grantPermission('cliente.edit')
        authService.grantPermission('cliente.delete')
        authService.grantPermission('cliente.create')
        notificationService.show({
          title: 'Aviso!!!',
          message: 'Seu acesso a Clientes foi adicionado.',
          description: '....',
          type: 'success'
        })
      }
    }
  }
</script>

<template>
  <div>
    <sidebar :show.sync="showProfile" placement="right" header="Perfil" :width="500">
      <div>
        <div class="row well-sm">
          <div class="col-md-3">
            <img :src="profileAvatar" width="64" height="64">
          </div>
          <div class="col-md-9">
            <span><strong>{{ user.name }}</strong></span>
          </div>
        </div>
      </div>
    </sidebar>
    <!-- NAV -->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="navbar-header">
        <a href="#" v-link="'/'" class="navbar-brand">SGE (1.0.0)</a>
      </div>
      <template v-if="visible">
        <div class="container-fluid">
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#" class="navbar-link" @click="grant">Grant</a>
              </li>
              <li>
                <a href="#" class="navbar-link" @click="revoke">Revoke</a>
              </li>
              <li>
                <img :src="profileAvatar" class="img-circle navbar__avatar-img" >
              </li>
              <li>
                <a href="#" class="navbar-link" @click="showProfile = true">
                  {{ user.name }}
                </a>
              </li>
              <li>
                <a href="#" v-link="logoutPath" class="navbar-link">
                  <i class="glyphicon glyphicon-log-out"></i>
                  <span>Sair</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </nav>
  </div>
</template>

<style>
  .navbar__avatar-img {
    max-height: 36px;
    margin-top: 6px;
    width:auto;
    vertical-align:middle;
  }
</style>
