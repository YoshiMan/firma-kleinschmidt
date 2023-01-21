<template>
  <v-app>
    <v-app-bar
      app
      color="blue"
      dark
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawerZeigen = !drawerZeigen" />
      <v-row align-content="center">
        <v-col>Karl Kleinschmidt Maschinenbau e.K.</v-col>
      </v-row>
    </v-app-bar>
    <TheNavigation v-model="drawerZeigen" />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TheNavigation from '@/components/TheNavigation.vue';
import TheFooter from '@/components/TheFooter.vue';

export default Vue.extend({
  components: { TheNavigation, TheFooter },
  data: () => ({
    drawerZeigen: true,
  }),
});
</script>
