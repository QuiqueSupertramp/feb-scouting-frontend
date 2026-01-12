<script lang="ts" setup></script>

<template>
  <div class="layout">
    <main class="p-8 bg-white">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100dvh;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  font-weight: 400;
}
</style>
