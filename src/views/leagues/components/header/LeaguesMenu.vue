<script lang="ts" setup>
import LeaguesMenuItem from './LeaguesMenuItem.vue'

const menu = {
  classification: { to: { name: 'leagueClassification' }, label: 'Clasificación' },
  players: { to: { name: 'leagueRankingPlayers' }, label: 'Jugadores' },
}
</script>

<template>
  <div class="flex justify-center">
    <nav class="flex items-center gap-4 pb-2 py-4 overflow-x-auto no-scrollbar bg-gray-100 px-4">
      <LeaguesMenuItem v-for="item in menu" :key="item.label" :to="item.to" :label="item.label" />
    </nav>
  </div>
</template>
