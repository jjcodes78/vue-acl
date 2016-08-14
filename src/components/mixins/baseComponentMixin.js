/**
 * Created by squad on 27/07/16.
 */
import authService from '../../services/authService'
import apiService from '../../services/apiService'
import queryService from '../../services/queryService'
import notificationService from '../../services/notificationService'
import routeMixin from '../../components/mixins/currentRouteMixin'
import { NEW_URL, EDIT_URL } from '../../router/paths'

export default {
  extends: routeMixin,

  computed: {
    selectedId() {
      return this.selected.length == 1 ? this.selected[0] : null
    },

    multiSelect() {
      return this.selected.length > 1
    },

    hasSelection() {
      return this.selected.length >= 1
    },
    canCreate() {
      return authService.hasPermission(this.permission.create)
    },

    canDelete() {
      return authService.hasPermission(this.permission.destroy)
    },

    canEdit() {
      return authService.hasPermission(this.permission.edit)
    }
  },

  methods: {

    /**
     * Exibe uma notificação personalizada
     */
    showNotification(title, message, descrition, type) {
      notificationService.show({
        duration: 5000,
        type: type,
        title: title,
        message: message,
        description: descrition,
        icon: 'glyphicon glyphicon-info-sign'
      })
    },

    /**
     * Redireciona a rota para o formuário, para cadastrar um novo evento
     */
    new () {
      this.$router.go(`${this.path}${NEW_URL}`)
    },

    /**
     * Redireciona a rota para o formulário passando o id do evento a ser editado
     */
    edit () {
      this.$router.go(`${this.path}${EDIT_URL}/${this.selectedId}`)
    },

    confirmDelete() {
      this.busy = true
      apiService.destroy(this.apiPath, this.selected)
        .then(function () {
          this.busy = false
          this.showDeleteDialog = false
          this.showNotification('OK!', this.deleteSuccessMessage, '', 'success')
          this.reload()
        }.bind(this))
        .catch(function () {
          this.busy = false
          this.showDeleteDialog = false
          this.showNotification(
            'Oops! Erro',
            this.deleteErrorMessage,
            'Entre em contrato com o adminstrador do sistema.',
            'danger')
        }.bind(this))
    },

    optionSelected(option) {
      switch (option.id) {
        case 'all':
          this.selectAll()
          break
        case 'none':
          this.selectNone()
          break
        case 'invert':
          this.invertSelection()
          break
      }
    },

    updatePerPage(option) {
      this.pagination.per_page = option.id
      this.reload()
    },

    pageChanged(page) {
      this.pagination.current_page = page
      this.$router.go({
        path: this.path,
        query: queryService.getPaginationQuery(this)
      })
    },

    beginSearch(searchTerm) {
      this.searchTerm = searchTerm
      this.orderBy = ''
      this.sortedBy = ''

      this.$router.go({
        path: this.path,
        query: {
          search: this.searchTerm
        }
      })
    },

  },

  route: {

    data() {
      queryService.getRouteQuery(this)
      return this.getData()
    }
  }
}