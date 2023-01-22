<template>
  <div>
    <UnserUnternehmen />
    <UnsereLeistungen />
    <UnsereZielgruppe />
    <UnsereQualifikationen />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UnserUnternehmen from '@/views/UnserUnternehmen.vue';
import UnsereLeistungen from '@/views/UnsereLeistungen.vue';
import UnsereZielgruppe from '@/views/UnsereZielgruppe.vue';
import UnsereQualifikationen from '@/views/UnsereQualifikationen.vue';

export default Vue.extend({
  components: {
    UnserUnternehmen,
    UnsereLeistungen,
    UnsereZielgruppe,
    UnsereQualifikationen,
  },
});
</script>
