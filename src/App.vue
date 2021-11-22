<template>
  <v-app>
    <v-app-bar
      app
      light
      flat
    >
      <div
        class="text-h4 ml-6"
        style="cursor:pointer;"
        @click="$router.push('/')"
      >
        Raymond Yang
      </div>
      <v-spacer />
      <v-btn text>
        <span
          class="mx-1"
          @click="$router.push('/')"
        >
          Home
        </span>
      </v-btn>
      <v-btn text>
        <span
          class="mx-1"
          @click="$router.push('/projects')"
        >
          Projects
        </span>
      </v-btn>
      <v-btn text>
        <span
          class="mx-1"
          @click="$router.push('/contact')"
        >
          Contact
        </span>
      </v-btn>
      <v-btn text>
        <span
          class="mx-1"
          @click="$router.push('/blog')"
        >
          Blog
        </span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app>
      Copyright Raymond Yang 2021
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
