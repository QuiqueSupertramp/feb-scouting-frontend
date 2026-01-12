<script lang="ts" setup>
import RankingTable from './RankingTable.vue'
import { sortPlayers } from '@/helpers/ranking'
import type { TeamView } from '@/types/teams'

interface Props {
  team: TeamView
}

const props = defineProps<Props>()

const sortedPlayers = sortPlayers(props.team.playerStats)
</script>

<template>
  <div class="gap-8 mb-8 grid grid-cols-1 sm:grid-cols-2 px-8">
    <RankingTable :players="sortedPlayers.threePoints" title="TRIPLES" />
    <RankingTable :players="sortedPlayers.freeThrows" title="TIROS LIBRES" />
    <RankingTable :players="sortedPlayers.steals" title="Balones Recuperados" />
    <RankingTable :players="sortedPlayers.turnovers" title="Balones Perdidos" />
    <RankingTable :players="sortedPlayers.points" title="PUNTOS" />
    <RankingTable :players="sortedPlayers.assists" title="ASISTENCIAS" />
    <RankingTable :players="sortedPlayers.rebounds" title="REBOTES" />
    <RankingTable :players="sortedPlayers.pir" title="VALORACIÓN" />
  </div>
</template>
