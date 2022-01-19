<template>
  <v-app>
    <v-app-bar
      app
      light
      flat
    >
      <div
        class="d-flex align-center"
        style="
          cursor:pointer;
          min-width:30%;
        "
        @click="$router.push('/')"
      >
        <img
          src="../public/logo.png"
          alt="Raymond Yang Logo"
        >
        <span class="text-h5 text-sm-h4 ml-4">Raymond Yang</span>
      </div>
      <v-spacer />
      <div
        v-if="showMobileMenu"
        class="text-center"
      >
        <v-menu offset-y>
          <template #activator="{ on, attrs }">
            <v-btn
              text
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-menu
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in navItems"
              :key="index"
            >
              <v-list-item-title @click="$router.push(item.path)">
                <v-btn text>
                  {{ item.title }}
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-else>
        <v-btn
          v-for="(item, index) in navItems"
          :key="index"
          text
          @click="$router.push(item.path)"
        >
          <span class="mx-1">
            {{ item.title }}
          </span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main
      class="mt-12"
      :style="`
        margin: auto;
        width: ${containerWidth};
      `"
    >
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer
      app
      class="d-flex justify-center"
    >
      Copyright &copy; Raymond Yang 2021
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      navItems: [
        {
          title: 'About',
          path: '/',
        },
        {
          title: 'Blog',
          path: '/blog',
        },
        {
          title: 'Contact',
          path: '/contact',
        }
      ],
      responsiveStyles: {
        mobile: {
          containerWidth: '90%'
        },
        desktop: {
          containerWidth: '60%'
        }
      }
    };
  },

  computed: {
    device() {
      return this.$vuetify.breakpoint.smAndDown ? 'mobile' : 'desktop';
    },

    containerWidth() {
      return this.responsiveStyles[this.device].containerWidth;
    },

    showMobileMenu() {
      return this.device === 'mobile';
    }
  }
};
</script>