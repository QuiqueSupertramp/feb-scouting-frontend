<script setup lang="ts">
import LayoutMobileFooter from './LayoutMobileFooter.vue'
</script>

<template>
  <div class="relative layout tracking-wide text-sm overflow-hidden">
    <main class="bg-white overflow-y-auto w-full">
      <RouterView />
    </main>
    <LayoutMobileFooter />
  </div>
</template>

<style scoped>
.layout {
  height: 100dvh;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;

  display: grid;
  grid-template-areas:
    'main'
    'footer';
  grid-template-rows: 1fr auto;
}
</style>
