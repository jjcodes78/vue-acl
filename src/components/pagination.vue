<script>
  export default {

    props: {
      page: {
        required: true,
        default: 1
      },
      for: {
        type: String,
        required: true
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
        this.$dispatch('vue-pagination::' + this.for, page);
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
    <nav>
      <template v-if="totalPages > 1">
        <ul class="pagination">
          <li class="VuePagination__pagination-item VuePagination__pagination-item-prev-page"
              v-bind:class="allowedPage(-1)?'':'disabled'">
            <a href="javascript:void(0);"
               @click="allowedPage(-1) && setPage(page-1)">
              <i class="glyphicon glyphicon-chevron-left"></i>
            </a>
          </li>

          <li class="VuePagination__pagination-item"
              v-for="page in pages"
              v-if="paginationStart + (page-1) <= totalPages"
              v-bind:class="isActive(paginationStart + $index - 1)?'active':''">
            <a href="javascript:void(0);"
               @click="setPage(paginationStart + $index)">{{paginationStart + $index}}</a>
          </li>

          <li class="VuePagination__pagination-item VuePagination__pagination-item-next-page"
              v-bind:class="allowedPage(1)?'':'disabled'">
            <a href="javascript:void(0);"
               @click="allowedPage(1) && setPage(page+1)">
              <i class="glyphicon glyphicon-chevron-right"></i>
            </a>
          </li>
        </ul>
      </template>
    </nav>
  </div>
</template>

<style>
  .VuePagination {
    margin: 0;
    padding: 0;
  }
</style>