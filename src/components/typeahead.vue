<script>
import VueTypeahead from './mixins/vue-typeahead'

export default {
  extends: VueTypeahead, // vue@1.0.22+
  // mixins: [VueTypeahead], // vue@1.0.21-

  props: {
    src: {
      type: String
    },

    name: {
      required: true,
      type: String
    },

    key: {
      type: String
    },

    field: {
      type: String
    },

    placeholder: {
      type: String
    },

    secondInfo: {
      type: Object
    },

    extraInfo: {
      type: Object
    }

  },

  data () {
    return {

      // The data that would be sent by request
      // (optional)
      data: {},

      // Limit the number of items which is shown at the list
      // (optional)
      limit: 5,

      // The minimum character length needed before triggering
      // (optional)
      minChars: 1,

      // Override the default value (`q`) of query parameter name
      // Use a falsy value for RESTful query
      // (optional)
      queryParamName: 'search'
    }
  },

  methods: {
    // The callback function which is triggered when the user hits on an item
    // (required)
    onHit (item) {
      window.console.log('hit');
      this.$dispatch('on-hit', item)
    },

    // The callback function which is triggered when the response data are received
    // (optional)
    prepareResponseData (data) {
      // data = ...
      return data
    }
  },

  filters: {
    highlight(value, phrase) {
      return value.replace(new RegExp('('+phrase+')', 'gi'), '<strong>$1</strong>')
    }
  }
}
</script>

<template>
  <div>
    <!-- the list -->
    <div class="Vue__typeahead">
      <!-- the input field -->
      <input type="text"
             size="100%"
             class="form-control"
             :placeholder="placeholder"
             autocomplete="off"
             v-model="query"
             @keydown.down="down"
             @keydown.up="up"
             @keydown.enter="hit"
             @keydown.esc="reset"
             @blur="reset"
             @input="update"/>

      <ul v-show="hasItems">
        <li v-for="item in items" class="Vue__typeahead" :class="activeClass($index)" @mousedown="hit" @mousemove="setActive($index)">
          <span class="Vue__typeahead name" v-text="item.nome"></span>
          <div class="row">
            <div class="col-md-6" v-if="secondInfo">
              <span class="Vue__typeahead">{{ secondInfo.text }}: {{ item[secondInfo.field] }}</span>
            </div>
            <div class="col-md-6" v-if="extraInfo">
              <span class="Vue__typeahead">{{ extraInfo.text }}: {{ item[extraInfo.field] }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
  .Vue__typeahead i {
    float: right;
    position: relative;
    top: 30px;
    right: 29px;
    opacity: 0.4;
  }
  .Vue__typeahead ul {
    position: absolute;
    padding: 0;
    margin-top: 4px;
    max-width: 100%;
    background-color: #fff;
    list-style: none;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0, 0.25);
    z-index: 1000;
  }
  .Vue__typeahead li {
    padding: 10px 16px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
  .Vue__typeahead li:first-child {
    border-radius: 4px 4px 0 0;
  }
  .Vue__typeahead li:last-child {
    border-radius: 0 0 4px 4px;
    border-bottom: 0;
  }
  .Vue__typeahead span {
    display: block;
    color: #2c3e50;
  }
  .Vue__typeahead .active {
    background-color: #3753a3;
  }
  .Vue__typeahead .active span {
    color: white;
  }
  .Vue__typeahead .name {
    font-weight: 700;
    font-size: 18px;
  }
</style>