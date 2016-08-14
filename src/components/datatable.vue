<script lang="babel">

  import { sortIcon } from '../components/mixins/sortableTableMixin'
  import coerceBoolean from '../utils/functions/coerceBoolean'

  export default {

    props: {
      columns: {
        type: Array,
        required: true,
        default: () => { return [] }
      },

      dataSource: {
        type: Array,
        required: true,
        default: () => { return [] }
      },

      selectedItems: {
        type: Array,
        twoWay: true,
        required: true,
        default: () => { return [] }
      },

      canEdit: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },

      canDelete: {
        type: Boolean,
        coerce: coerceBoolean,
        defalt: true
      }
    },

    data () {
      return {
      }
    },

    methods: {
      sortIcon,

      onClickColumn(field) {
        this.$dispatch('on-click-column', field)
      },

      rowClicked(column, item) {
        this.$dispatch('row-clicked', column, item)
      },

      rowDblClicked(column) {
        this.$dispatch('row-dblclicked', column, item)
      },

      callback (column, item) {
        return this.$dispatch('callback', column, item)
      }
    }
  }
</script>

<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-body">
        <table class="table table-hover">
          <thead>
          <tr>
            <div v-for="column in columns">
              <template v-if="column.type == 'check'">
                <th width="32"></th>
              </template>
              <template v-if="column.type == 'sortable'">
                <th class="Vue__clickable" @click="onClickColumn(column.field)">
                  <i class="glyphicon"
                     :class="sortIcon(column.field)"></i>
                  {{ column.label }}
                </th>
              </template>
              <template v-if="!column.type">
                <th>{{ column.label }}</th>
              </template>
            </div>
            <!-- F: columns v-for -->
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in dataSource"
              class="Vue__clickable"
          >
            <template v-for="column in columns" >
              <div v-if="column.type == 'check'" @click="rowClick(column.field)">
                <td>
                  <template v-if="canEdit || canDelete">
                    <input type="checkbox" :checked="selectedItems.indexOf(item.id) > -1" class="checkbox-inline" />
                  </template>
                </td>
              </div>
              <template v-if="column.type == 'callback'">
                <td v-html="callback(column.name, item)"></td>
              </template>
              <template v-if="!column.type || column.type == 'sortable'">
                <td>{{ item[column.name] }}</td>
              </template>
            </template>
            <!-- F: templte columns items -->
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>

</style>