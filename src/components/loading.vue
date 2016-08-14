<script>
  export default {

    props: {
      visible: {
        type: Boolean,
        default: true,
        coerce: function (val) {
          return typeof val !== "string" ? val :
                  val === "true" ? true :
                          val === "false" ? false :
                                  val === "null" ? false :
                                          val === "undefined" ? false : val
        }
      }
    }

  }
</script>

<template>
  <div>
    <div class="load-bar" v-if="visible">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div v-if="visible">
      <div class="col-md-12 text-center">
        <h3>Carregando... aguarde.</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .load-bar {
    position: fixed;
    left: 0;
    top: 0;
    z-Index: 10000;
    width: 100%;
    height: 6px;
    background-color: #fdba2c;
  }
  .bar {
    content: "";
    display: inline;
    position: absolute;
    width: 0;
    height: 100%;
    left: 50%;
    text-align: center;
  }
  .bar:nth-child(1) {
    background-color: #da4733;
    animation: loading 3s linear infinite;
  }
  .bar:nth-child(2) {
    background-color: #3b78e7;
    animation: loading 3s linear 1s infinite;
  }
  .bar:nth-child(3) {
    background-color: #fdba2c;
    animation: loading 3s linear 2s infinite;
  }
  @keyframes loading {
    from {left: 50%; width: 0;z-index:100;}
    33.3333% {left: 0; width: 100%;z-index: 10;}
    to {left: 0; width: 100%;}
  }
</style>