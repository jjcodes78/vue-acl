/**
 * Configura o Router:
 * - define as rotas e os componentes
 * - cria a rota padrão de redirecionamento
 * - e monitora a cada transição se há um usuário logado
 */
import _routes from './routes'

import CommonRoutes from '../modules/dashboard/router/routes'
import AuthRoutes from '../modules/auth/router/routes'

import authService from '../services/authService'
import { LOGIN_URL } from './paths'

const routes = Object.assign(
  _routes,
  CommonRoutes,
  AuthRoutes,
)

export function routerConfig(router) {

  /* faz o mapeamento das rotas e componentes */
  router.map(routes)

  router.afterEach( (transition) => localStorage.setItem('from', transition.from.path))

  /**
   * Faz a verificação antes de cada mudança/atualização de rota
   */
  /*
   * A cada transição é verificada se:
   * - a rota precisa de autenticação para ser visitada
   * - se há usuário logado
   * - se há um token válido para refazer a autenticação
   * - se a rota possui alguma permissao especifica
   * - verifica se o usuario tem permissao de acessar uma rota com nivel de permissao
   */
  router.beforeEach(function (transition) {

    let token = null

    if (!authService.isLoggedIn()) {
      token = localStorage.getItem('jwt-token')
    }

    if (transition.to.auth && token !== null && !authService.isLoggedIn()) {

      /* Armazena o token  */
      authService.setToken(token)

      /* Obtem os dados do usuario e suas permissões (verificando o token enviado) */
      authService.getUserProfile()
        .then(function (res) {
          authService.setUser(res.data.user, res.data.permissions)
          transition.next()
        }).catch(function () {
          authService.remove()
          transition.redirect(LOGIN_URL)
        })

    } else if(transition.to.auth && !authService.isLoggedIn()) {

      transition.redirect(LOGIN_URL)

    } else if(transition.to.guest && authService.isLoggedIn()) {

      transition.redirect(transition.from.path)

    } else if(transition.to.auth && transition.to.permission && !authService.hasPermission(transition.to.permission)) {

      transition.redirect(transition.from.path)

    } else {

      transition.next()

    }

  })

}