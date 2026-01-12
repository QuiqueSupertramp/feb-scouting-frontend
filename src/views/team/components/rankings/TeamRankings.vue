<script lang="ts" setup>
import type { TeamView } from '@/types/teams'
import RankingTable from './RankingTable.vue'

interface Props {
  team: TeamView
}

const props = defineProps<Props>()

const sortPlayers = () => {
  const p = [...props.team.playerStats]

  const points = p
    .sort((a, b) => b.stats.points - a.stats.points)
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.points,
    }))

  const rebounds = p
    .sort((a, b) => b.stats.totalRebounds - a.stats.totalRebounds)
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.totalRebounds,
    }))
  const assists = p
    .sort((a, b) => b.stats.assists - a.stats.assists)
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.assists,
    }))
  const pir = p
    .sort((a, b) => b.stats.pir - a.stats.pir)
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.pir,
    }))
  const threePoints = p
    .sort((a, b) => (b.stats.threePoints.percentage ?? 0) - (a.stats.threePoints.percentage ?? 0))
    .filter((p) => p.stats.threePoints.attempted >= 1)
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.threePoints.percentage + '%',
    }))
  const freeThrows = p
    .sort((a, b) => (b.stats.freeThrows.percentage ?? 0) - (a.stats.freeThrows.percentage ?? 0))
    .filter((p) => p.stats.freeThrows.attempted >= 1)
    .slice(0, 3)
    .map((p) => ({
      name: p.name,
      value: p.stats.freeThrows.percentage + '%',
    }))
  return { points, rebounds, assists, threePoints, pir, freeThrows }
}

const sortedPlayers = sortPlayers()
</script>

<template>
  <div class="gap-8 mb-8 grid grid-cols-1 sm:grid-cols-2 px-8">
    <RankingTable :players="sortedPlayers.points" title="PUNTOS" />
    <RankingTable :players="sortedPlayers.rebounds" title="REBOTES" />
    <RankingTable :players="sortedPlayers.assists" title="ASISTENCIAS" />
    <RankingTable :players="sortedPlayers.threePoints" title="TRIPLES" />
    <RankingTable :players="sortedPlayers.freeThrows" title="TIROS LIBRES" />
    <RankingTable :players="sortedPlayers.pir" title="VALORACIÓN" />
  </div>
</template>
