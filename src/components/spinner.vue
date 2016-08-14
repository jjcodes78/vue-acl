<script>

  import coerceBoolean from '../utils/functions/coerceBoolean'

  export default {
    props: {
      show: {
        type: Boolean,
        coerce: coerceBoolean
      }
    }
  }
</script>

<template>
  <div>
    <div v-if="show" class="loader"></div>
  </div>
</template>

<style scoped>
  /*LOADER*/
  .loader {
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(37, 114, 197, 0.2);
    border-right: 1.1em solid rgba(37, 114, 197, 0.2);
    border-bottom: 1.1em solid rgba(37, 114, 197, 0.2);
    border-left: 1.1em solid #2572c5;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
  }
  .loader,
  .loader:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

</style>