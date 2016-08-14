/**
 * Created by squad on 30/07/16.
 */

export default {
  methods: {
    /**
     * Seleciona todos os items atuais da lista
     * @object source
     * @string selection name
     */
    tsAll(source, dest) {

      let ids = []

      this.$set(dest, [])

      source.map( (item) => ids.push(item.id) )

      this.$set(dest, ids)

    },

    /**
     * Desmarca todos os items selecionados
     */
    tsNone(dest) {
      this.$set(dest, [])
    },

    /**
     * Inverte a selecão atual
     */
    tsInvert(source, dest) {

      source.map( (item) => {
        let index = dest.indexOf(item.id)

        if (index > -1) {
          dest.$remove(item.id)
        } else {
          dest.push(item.id)
        }
      })

    },

    tsToggle(id, dest) {
      let index = dest.indexOf(id)

      if ( index > -1 ) {
        dest.$remove(id)
      } else {
        dest.push(id)
      }
    }
  }
}