<template>
  <v-footer
    color="primary"
    dark
    padless
    app
  >
    <v-row
      justify="center"
    >
      <v-col
        cols="auto"
      >
        <v-btn
          v-for="(item, index) in footer"
          :key="index"
          text
          :to="item"
        >
          <v-icon
            left
          >
            {{ item.icon }}
          </v-icon>

          {{ item.nameInDerNavigation }}
        </v-btn>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { footer } from '@/router';

export default Vue.extend({
  data() {
    return { footer };
  },

});
</script>
