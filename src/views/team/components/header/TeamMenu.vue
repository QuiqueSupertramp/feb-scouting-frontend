<script lang="ts" setup>
import SlideMenu from '@/components/menu/SlideMenu.vue'

const menu = {
  stats: { to: { name: 'teamStats' }, label: 'Estadísticas' },
  results: { to: { name: 'teamScores' }, label: 'Resultados' },
  players: { to: { name: 'teamPlayerStats' }, label: 'Jugadores' },
  rankings: { to: { name: 'teamRankings' }, label: 'Rankings' },
}
</script>

<template>
  <SlideMenu :menu="menu" />
</template>
