<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      clipped-left
      :to="homeRoute"
    >
      <router-link
        :to="homeRoute"
      >
        <span
          class="white--text"
        >
          Karl Kleinschmidt Maschinenbau e.K.
        </span>
      </router-link>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TheFooter from '@/components/TheFooter.vue';
import { homeRoute } from '@/router';

export default Vue.extend({
  components: {
    TheFooter,
  },
  data() {
    return {
      homeRoute,
    };
  },
});
</script>
