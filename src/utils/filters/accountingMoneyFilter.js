/**
 * Created by squad on 03/08/16.
 */

import accounting from 'accounting'

export default {
  filters: {
    'money': {
      // model -> view
      // formats the value when updating the input element.
      read: function (val) {
        return accounting.formatMoney(val, 'R$ ', 2, '.', ',')
      },
      // view -> model
      // formats the value when writing to the data.
      write: function (val) {
        var number = accounting.unformat(val)
        return isNaN(number) ? 0 : parseFloat(number.toFixed(2))
      }
    }
  }
}