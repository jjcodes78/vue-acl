/**
 * Created by squad on 29/07/16.
 */

export default {
  methods: {
    getStatus(status) {

      let statusText , statusColor

      switch (status) {
        case '0':
          statusText = 'Pendente'
          statusColor = 'warning'
          break
        case '1':
          statusText = 'Em Análise'
          statusColor = 'info'
          break
        case '2':
          statusText = 'Aprovado'
          statusColor = 'success'
          break
        case '3':
          statusText = 'Cancelado'
          statusColor = 'danger'
          break
      }

      return `<div class="label label-${statusColor}">${statusText}</div>`
    }
  }
}