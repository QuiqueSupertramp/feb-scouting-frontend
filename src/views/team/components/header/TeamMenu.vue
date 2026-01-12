<script lang="ts" setup>
import TeamMenuItem from './TeamMenuItem.vue'

const menu = {
  stats: { to: { name: 'teamStats' }, label: 'Comparativa' },
  results: { to: { name: 'teamScores' }, label: 'Resultados' },
  players: { to: { name: 'teamPlayerStats' }, label: 'Jugadores' },
  rankings: { to: { name: 'teamRankings' }, label: 'Rankings' },
}
</script>

<template>
  <div class="flex justify-center">
    <nav class="flex items-center gap-4 pb-2 py-4 overflow-x-auto bg-gray-100">
      <TeamMenuItem v-for="item in menu" :key="item.label" :to="item.to" :label="item.label" />
    </nav>
  </div>
</template>

<!-- <style scoped>
/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

nav div a.router-link-exact-active {
  color: var(--color-orange);
  border-bottom: 2px solid var(--color-orange);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  cursor: default;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-bottom: 2px solid transparent;
}

/* nav a:first-of-type {
  border: 0;
} */
</style> -->
