<script setup lang="ts">
import { onMounted } from 'vue'
import LoaderFull from './components/LoaderFull.vue'
import TheLayout from './layouts/TheLayout.vue'
import { useTeamsStore } from './stores/teams'

const store = useTeamsStore()

onMounted(store.loadTeams)
</script>

<template>
  <LoaderFull />
  <TheLayout />
</template>

<!-- <style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style> -->
