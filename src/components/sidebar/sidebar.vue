<script>
  import { links } from './router/links'
  import authService from '../../services/authService'

  export default {

    props: ['visible'],

    data() {
      return {
        links
      }
    },

    methods: {
      hasPermission (permission) {
        return authService.hasPermission(permission)
      }
    }
  }
</script>

<template>
  <div class="col-md-2">
    <nav class="navbar navbar-fixed-side navbar-inverse" v-if="visible">
      <div class="navbar-header">
        <span class="navbar-brand">MENU</span>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li v-for="link in links" v-if="hasPermission(link.permission) || !link.permission" :class="{ 'active': $route.path == link.path, 'dropdown': link.subItems }">
            <template v-if="link.subItems">
              <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                {{ link.title }}
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li v-for="subItem in link.subItems" v-link-active>
                  <a v-if="hasPermission(subItem.permission) || !subItem.permission"

                     href="#" v-link="{ path: subItem.path, activeClass: 'active' }">
                    <template v-if="subItem.icon">
                      <i :class="subItem.icon"></i>
                    </template>
                    <span>{{ subItem.title }}</span>
                  </a>
                </li>
              </ul>
            </template>
            <template v-else>
              <a href="#" v-link="{ path: link.path }" class="navbar-link">
                <template v-if="link.image">
                  <img :src="link.image.source" :class="link.image.class" :style="link.image.style">
                </template>
                <template v-if="link.icon">
                  <i :class="link.icon"></i>
                </template>
                <span>{{ link.title }}</span>
              </a>
            </template>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>