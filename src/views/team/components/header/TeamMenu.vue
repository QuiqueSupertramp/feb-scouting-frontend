<script lang="ts" setup>
import TeamMenuItem from './TeamMenuItem.vue'

const menu = {
  stats: { to: { name: 'teamStats' }, label: 'Estadísticas' },
  results: { to: { name: 'teamScores' }, label: 'Resultados' },
  players: { to: { name: 'teamPlayerStats' }, label: 'Jugadores' },
  rankings: { to: { name: 'teamRankings' }, label: 'Rankings' },
}
</script>

<template>
  <div class="shadow-2xl flex justify-center h-full w-full bg-gray-100">
    <nav class="flex items-center gap-4 overflow-x-auto no-scrollbar px-4 h-full">
      <TeamMenuItem v-for="item in menu" :key="item.label" :to="item.to" :label="item.label" />
    </nav>
  </div>
</template>
