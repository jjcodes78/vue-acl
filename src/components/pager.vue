<script>
  export default {

    props: {
      page: {
        required: true,
        default: 1
      },
      records: {
        required: true
      },
      perPage: {
        required: false,
        default: 25
      },
      chunk: {
        required: false,
        default: 10
      },
      countText: {
        type: String,
        required: false,
        default: '{count} records'
      }
    },
    computed: {
      pages: function() {
        return range(1,this.chunk);
      },
      totalPages: function() {
        return Math.ceil(this.records / this.perPage);
      },
      totalChunks: function() {
        return Math.ceil(this.totalPages / this.chunk);
      },
      currentChunk: function() {
        return Math.ceil(this.page / this.chunk);
      },
      paginationStart: function() {
        return ((this.currentChunk-1) * this.chunk) + 1;
      },
      count: function() {
        return this.countText.replace('{count}', this.records);
      }
    },
    methods: {
      setPage: function(page) {
        this.page = page;
        this.$dispatch('page-changed', page);
      },
      setChunk: function(direction) {
        this.setPage((((this.currentChunk -1) + direction) * this.chunk) + 1);
      },
      allowedPage: function(direction) {
        return (direction==1 && this.page<this.totalPages)
                ||  (direction==-1 && this.page>1);
      },
      allowedChunk: function(direction) {
        return (direction==1 && this.currentChunk<this.totalChunks)
                ||  (direction==-1 && this.currentChunk>1);
      },
      isActive: function(index) {
        return this.page==(index+1);
      }
    }
  }

  function range(start, count) {
    return Array.apply(0, Array(count))
            .map(function (element, index) {
              return index + start;
            });
  }
</script>

<template>
  <div>
    <template v-if="totalPages > 1">
      <div class="input-group">
        <div class="input-group-btn">
          <button @click="allowedPage(-1) && setPage(page-1)"
                  class="btn btn-default VuePager__btn"
                  :class="allowedPage(-1)?'':'disabled'">
            <i class="glyphicon glyphicon-chevron-left"></i>
          </button>
          <button @click="allowedPage(1) && setPage(page+1)"
                  class="btn btn-default VuePager__btn"
                  :class="allowedPage(1)?'':'disabled'">
            <i class="glyphicon glyphicon-chevron-right"></i>
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<style>
  .btn.VuePager__btn {
    outline: none
  }
</style>