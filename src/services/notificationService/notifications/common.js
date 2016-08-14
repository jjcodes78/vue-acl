/**
 * Created by squad on 20/07/16.
 */

export const CONNECTION_ERROR = {
  duration: 5000,
  type: 'danger',
  title: 'Oops! Erro',
  message: 'Verifique a conexão e tente novamente.',
  description: 'Não foi possível estabelecer uma conexão com o serviço. (ERR_CONNECTION_REFUSED)',
  icon: 'glyphicon glyphicon-remove-sign'
}

export const INTERNAL_SERVER_ERROR = {
  duration: 5000,
  type: 'danger',
  title: 'Oops! Erro',
  message: 'Erro interno do servidor.',
  description: 'Não foi possível estabelecer uma conexão com o serviço. (INTERNAL_SERVER_ERROR)',
  icon: 'glyphicon glyphicon-remove-sign'
}

// Notificações de login
export const USER_LOGGED_IN = {
  duration: 3000,
  type: 'success',
  title: 'OK!',
  message: 'Login efetuado com sucesso!',
  icon: 'glyphicon glyphicon-ok-sign'
}

export const USER_LOGGED_OUT = {
  duration: 3000,
  type: 'success',
  title: 'OK!',
  message: 'Logout efetuado com sucesso!',
  description: 'Faça login novamente para voltar a utilizar a aplicação.',
  icon: 'glyphicon glyphicon-ok-sign'
}

export const INVALID_TOKEN = {
  duration: 5000,
  type: 'danger',
  title: 'Oops! Erro',
  message: 'Token Inválido.',
  description: 'Contate o administrador do sistema. (INVALID_TOKEN)',
  icon: 'glyphicon glyphicon-remove-sign'
}

export const EXPIRED_TOKEN = {
  duration: 5000,
  type: 'danger',
  title: 'Oops! Erro',
  message: 'Token Expirado.',
  description: 'Contate o administrador do sistema. (EXPIRED_TOKEN)',
  icon: 'glyphicon glyphicon-remove-sign'
}

export const INVALID_CREDENTIALS = {
  duration: 5000,
  type: 'danger',
  title: 'Oops! Erro',
  message: 'E-mail ou senha inválidos.',
  description: 'Efetue login novamente ou contate o administrador do sistema. (INVALID_CREDENTIALS)',
  icon: 'glyphicon glyphicon-remove-sign'
}

export const ACCESS_FORBIDDEN = 'ACCESS_FORBIDDEN'             // status 403
export const NOT_FOUND = 'NOT_FOUND'                           // status 404