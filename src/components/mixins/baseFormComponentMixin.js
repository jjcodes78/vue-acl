/**
 * Created by squad on 27/07/16.
 */

import apiService from '../../services/apiService'

export default {
  methods: {
    /**
     * Return a create/update promise
     */
    getPromise(url, obj) {

      if (this.editing) {
        return apiService.update(url, obj['id'], obj)
      }
      return apiService.create(url, obj)
    },

    cancel() {
      let toPath = (localStorage.getItem('from')) ? localStorage.getItem('from') : this.path
      this.$router.go(toPath)
    },

    goBack() {
      this.cancel()
    }

  },

  computed: {
    editing() {
      return this.$route.params.id
    },

    confirmButtonText() {
      return this.editing ? `Atualizar ${this.title}` : `Salvar ${this.title}`
    },

    cancelButtonText() {
      return this.editing ? "Cancelar Edição" : "Cancelar Cadastro"
    },

    successMessage() {
      return this.editing ? `${this.title} atualizado com sucesso!` :  `${this.title} cadastrado com sucesso!`
    }
  },
}