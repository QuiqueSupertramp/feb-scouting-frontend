<script lang="ts" setup>
import { rankingPlayers } from '@/helpers/ranking'
import RankingTable from './RankingTable.vue'
import type { TeamView } from '@/types/teams'

interface Props {
  team: TeamView
}

const props = defineProps<Props>()

const sortedPlayers = rankingPlayers(props.team.playerStats)
</script>

<template>
  <div class="gap-8 mb-8 grid grid-cols-1 sm:grid-cols-2 px-8">
    <RankingTable :players="sortedPlayers.threePoints" title="Triples" />
    <RankingTable :players="sortedPlayers.freeThrows" title="Tiros Libres" />
    <RankingTable :players="sortedPlayers.steals" title="Balones Recuperados" />
    <RankingTable :players="sortedPlayers.turnovers" title="Balones Perdidos" />
    <RankingTable :players="sortedPlayers.points" title="Puntos" />
    <RankingTable :players="sortedPlayers.assists" title="Asistencias" />
    <RankingTable :players="sortedPlayers.rebounds" title="Rebotes" />
    <RankingTable :players="sortedPlayers.pir" title="Valoración" />
  </div>
</template>
