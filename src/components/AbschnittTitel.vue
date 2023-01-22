<template>
  <v-row
    data-aos="fade-right"
    data-aos-ease="ease"
    data-aos-duration="1500"
    data-aos-delay="1000"
    justify="center"
  >
    <v-col
      align-self="center"
    >
      <v-divider />
    </v-col>
    <v-col cols="auto">
      <span class="text-h2">{{ titel }}</span>
    </v-col>
    <v-col
      align-self="center"
    >
      <v-divider />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    titel: {
      type: String,
      required: true,
    },

  },
});
</script>
