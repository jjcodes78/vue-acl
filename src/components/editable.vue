<script lang="babel">

  import coerceBoolean from '../utils/functions/coerceBoolean'
  import copyObject from '../utils/functions/copyObject'
  import moneyFilter from '../utils/filters/accountingMoneyFilter'
  import vueMask from '../utils/directives/vue-mask.vue'

  export default {

    mixins: [moneyFilter],

    props: {

      value: {},

      type: {
        type:String,
        'default': 'normal'
      },

      show: {
        type: Boolean,
        twoWay: true,
        'default': false,
        coerce: coerceBoolean
      },

      header: {
        type: String,
        required: true
      },

      text: {
        type: String,
        required: true
      },

      maskPattern: {
        type: String
      },
    },

    data () {
      return {
        newValue: undefined
      }
    },

    watch: {
      show(val) {
        if(val) this.newValue = copyObject(this.value)
      }
    },

    methods: {
      close() {
        this.show = false
      },

      confirm() {
        this.$dispatch('value-updated', this.newValue)
        this.close()
      }
    },

    computed: {
      getType() {
        return this.type === 'money' ? 'money' : 'normal'
      }
    },
  }
</script>

<template>
  <div>
    <ui-modal :show.sync="show"
              :header="header"
              @closed="close"
    >
      <div class="row">
        <div class="text-center">
          <div class="col-md-12">
            <div class="form-group">
              <label for="qt" class="input-control">{{ text }}</label>
              <template v-if="getType === 'normal'">
                <template v-if="maskPattern">
                  <input name="qt" v-mask :pattern="maskPattern" class="form-control" v-model="newValue" />
                </template>
                <template v-else>
                  <input name="qt" class="form-control" v-model="newValue" />
                </template>
              </template>
              <template v-else>
                <input name="qt" v-mask money class="form-control" v-model="newValue" />
              </template>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <div class="row">
          <ui-button @click="confirm" color="primary" :disabled="!newValue">
            Confirmar
          </ui-button>
          <ui-button @click="close" color="default">
            Cancelar
          </ui-button>
        </div>
      </div>
    </ui-modal>
  </div>
</template>

<style>

</style>