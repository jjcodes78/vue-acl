<script>

  import Vue from 'vue'
  import VMasker from 'vanilla-masker'

  Vue.directive('mask', {
    params: ['pattern', 'money'],

    bind () {
      if(this.params.pattern) {
        VMasker(this.el).maskPattern(this.params.pattern)
      } else if(this.params.money) {
        VMasker(this.el).maskMoney({
          // Decimal precision -> "90"
          precision: 2,
          // Decimal separator -> ",90"
          separator: ',',
          // Number delimiter -> "12.345.678"
          delimiter: '.',
          // Money unit -> "R$ 12.345.678,90"
          unit: 'R$',
          // Force type only number instead decimal,
          // masking decimals with ",00"
          // Zero cents -> "R$ 1.234.567.890,00"
          zeroCents: true
        });
      }
    }

  })

</script>