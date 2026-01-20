<script lang="ts" setup>
import SlideMenu from '@/components/menu/SlideMenu.vue'

const menu = {
  classification: { to: { name: 'leagueClassification' }, label: 'Clasificación' },
  players: { to: { name: 'leagueRankingPlayers' }, label: 'Jugadores' },
}
</script>

<template>
  <SlideMenu :menu="menu" />
</template>
