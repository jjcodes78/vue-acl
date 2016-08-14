import Vue from "vue"
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import KeenUI from 'keen-ui'

import App from "./App.vue"
import { routerConfig } from "./router/config"
import VueValidator from "vue-validator"

Vue.use(VueValidator)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(KeenUI)

Vue.validator('email', function (val) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
})

let router = new VueRouter()

//Configura o Router
routerConfig(router)

//Inicia o Router
router.start(App, "App")