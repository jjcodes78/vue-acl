<script>

  import coerceBoolean from '../utils/functions/coerceBoolean'

  export default {

    props: {
      placeholder: {
        type: String
      },
      helpText: {
        type: String
      },
      resetButton: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      }
    },

    data () {
      return {
        searchTerm: ''
      }
    },

    computed: {
      getPlaceholder() {
        return this.placeholder || "Digite o termo da pesquisa"
      },

      getHelpText() {
        return this.helpText || ''
      }
    },

    methods: {
      parseDate() {
        return this.searchTerm.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
      },

      search () {
        let parsed = this.parseDate()
        let search = null

        if( parsed !== null) {
          search = `${parsed[3]}-${parsed[2]}-${parsed[1]}`
        } else {
          search = this.searchTerm
        }

        this.$dispatch('begin-search', search )
      },

      refresh () {
        this.searchTerm = ''
        this.$dispatch('reset-search')
      }
    }
  }
</script>

<template>
  <div>
    <div class="col-md-12 well-sm">
      <div class="col-md-8">
        <ui-textbox name="search"
                    :value.sync="searchTerm"
                    :placeholder="getPlaceholder"
                    :help-text="getHelpText"
                    @keyup.enter="search"
        ></ui-textbox>
      </div>
      <div class="input-group">
        <ui-button color="primary"
                   @click.prevent="search"
                   icon="search"
                   :raised="true"
                   text="OK"
                   v-el:search
        ></ui-button>
        <ui-tooltip :trigger="$els.search" content="Pesquisar"></ui-tooltip>
        <ui-button color="default"
                   @click.prevent="refresh"
                   icon="refresh"
                   :raised="true"
                   text=""
                   v-show="resetButton"
                   v-el:refresh
        ></ui-button>
        <ui-tooltip :trigger="$els.refresh" content="Limpar Busca"></ui-tooltip>
      </div>
    </div>
  </div>
</template>

<style></style>