<template>
  <v-navigation-drawer
    v-model="innerDrawerZeigen"
    app
    flat
    clipped
  >
    <v-list nav>
      <span
        v-for="(item, index) in navigation"
        :key="index"
      >
        <v-list-item :to="item">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.nameInDerNavigation }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </span>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { navigation } from '@/router';

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      innerDrawerZeigen: this.value,
      navigation,
    };
  },
  watch: {
    innerDrawerZeigen(newValue) {
      this.$emit('input', newValue);
    },
    value(newValue) {
      this.innerDrawerZeigen = newValue;
    },
  },

});
</script>

<style>

</style>
