/**
 * Created by squad on 29/07/16.
 */


export default {
  methods: {
    sort (field) {

      let query = {}
      query['sortedBy'] = (this.orderBy == field && this.sortedBy == 'asc') ? 'desc' : 'asc'
      query['orderBy'] = field
      this.orderBy = field

      this.$router.go({
        path: this.path,
        query: query
      })
    },

    sortIcon(field) {
      return (this.$route.query.orderBy == field && this.$route.query.sortedBy == 'asc') ? 'glyphicon-sort-by-attributes':
        (this.$route.query.orderBy == field && this.$route.query.sortedBy == 'desc') ? 'glyphicon-sort-by-attributes-alt' :
          'glyphicon-sort'
    },

  }
}