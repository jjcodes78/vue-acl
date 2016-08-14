/**
 * Created by squad on 08/08/16.
 */

import moment from 'moment'

export default {
  filters: {
    'date': {
      // model -> view
      // formats the value when updating the input element.
      read: function (val, format) {
        return moment(val).format(format || 'DD/MM/YYYY')
      },
      // view -> model
      // formats the value when writing to the data.
      write: function (val) {
        var dateISO = moment(val, "YYYY-MM-DD")
        return isNaN(dateISO) ? 0 : dateISO
      }
    }
  }
}