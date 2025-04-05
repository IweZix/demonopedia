<script lang="ts">
import { renderPageTitle } from '@/utils/render/render';

export default {
  name: 'NotFoundPage',
  data() {},
  async mounted() {
    renderPageTitle('404 - Not found');
  },
  methods: {}
};
</script>

<template>
  <div class="text-center">
    <h1>Not Found</h1>
  </div>
</template>
