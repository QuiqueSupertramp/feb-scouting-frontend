<script lang="ts" setup>
import TeamMenuItem from './TeamMenuItem.vue'

const menu = {
  stats: { to: { name: 'teamStats' }, label: 'Estadísticas' },
  results: { to: { name: 'teamScores' }, label: 'Resultados' },
  points: { to: { name: 'teamPoints' }, label: 'Puntos' },
  players: { to: { name: 'teamPlayerStats' }, label: 'Jugadores' },
  rankings: { to: { name: 'teamRankings' }, label: 'Rankings' },
}
</script>

<template>
  <div class="flex justify-center">
    <nav class="flex items-center gap-4 pb-2 py-4 overflow-x-auto no-scrollbar bg-gray-100 px-4">
      <TeamMenuItem v-for="item in menu" :key="item.label" :to="item.to" :label="item.label" />
    </nav>
  </div>
</template>
