<script lang="ts" setup>
import { sortPlayers } from '@/helpers/ranking'
import type { TeamView } from '@/types/teams'
import RankingTable from './RankingTable.vue'

interface Props {
  local: TeamView
  away: TeamView
}

const props = defineProps<Props>()

const localRanking = sortPlayers(props.local.playerStats)
const awayRanking = sortPlayers(props.away.playerStats)
</script>

<template>
  <div class="font-bold text-2xl mt-4">RANKINGS</div>
  <div class="gap-8 grid grid-cols-2">
    <div class="flex flex-col gap-4">
      <RankingTable :players="localRanking.points" title="PUNTOS" />
      <RankingTable :players="localRanking.rebounds" title="REBOTES" />
      <RankingTable :players="localRanking.assists" title="ASISTENCIAS" />
      <RankingTable :players="localRanking.threePoints" title="TRIPLES" />
      <RankingTable :players="localRanking.freeThrows" title="TIROS LIBRES" />
      <RankingTable :players="localRanking.steals" title="Balonces Recuperados" />
      <RankingTable :players="localRanking.turnovers" title="Balones Perdidos" />
      <RankingTable :players="localRanking.pir" title="VALORACIÓN" />
    </div>
    <div class="flex flex-col gap-4">
      <RankingTable :players="awayRanking.points" title="PUNTOS" />
      <RankingTable :players="awayRanking.rebounds" title="REBOTES" />
      <RankingTable :players="awayRanking.assists" title="ASISTENCIAS" />
      <RankingTable :players="awayRanking.threePoints" title="TRIPLES" />
      <RankingTable :players="awayRanking.freeThrows" title="TIROS LIBRES" />
      <RankingTable :players="awayRanking.steals" title="Balonces Recuperados" />
      <RankingTable :players="awayRanking.turnovers" title="Balones Perdidos" />
      <RankingTable :players="awayRanking.pir" title="VALORACIÓN" />
    </div>
  </div>
</template>
