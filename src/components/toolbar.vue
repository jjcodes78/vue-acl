<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar">
            <slot name="toolbox-left"></slot>
          </ul>
          <slot></slot>
          <ul class="nav navbar-nav navbar-right">
            <slot name="toolbox-right"></slot>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>