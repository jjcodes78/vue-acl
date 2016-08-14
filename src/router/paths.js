/**
 * Created by squad on 16/07/16.
 */

/*
 API SERVICES URLs
 */
export const API_BASE_URL = 'http://localhost:8000/api/v1'
export const API_AUTH_URL = API_BASE_URL + '/auth'
export const API_LOGOUT_URL = API_AUTH_URL + '/logout'
export const API_USER_PROFILE_URL = API_BASE_URL + '/auth/profile'

export const API_USERS_URL = API_BASE_URL + '/users'
export const API_USERS_SHOW = API_USERS_URL + '/:id'
export const API_USERS_LIST = API_USERS_URL + '/list'

/*
  APPLICATION ROUTES URLs
 */
export const LOGIN_URL = '/auth/login'
export const LOGOUT_URL = '/auth/logout'

export const BASE_URL = '/'
export const NEW_URL = '/novo'
export const EDIT_URL = '/editar'
export const EDIT_PARAM_URL = '/editar/:id'
export const NEW_PARAM_URL = '/novo/:id'
export const DELETE_URL = '/excluir'