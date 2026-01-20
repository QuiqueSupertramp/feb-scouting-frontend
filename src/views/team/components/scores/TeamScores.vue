<script lang="ts" setup>
import ScoreTable from '@/components/scores/ScoreTable.vue'
import type { TeamView } from '@/types/teams'
import { getTeamImage } from '@/helpers/feb'

defineProps<{ team: TeamView }>()
</script>

<template>
  <div class="px-8 my-8">
    <div class="max-w-87 mx-auto grid grid-cols-1 sm:grid-cols-2 sm:max-w-full gap-8">
      <div v-for="score in team.scores" :key="score.gameFebId">
        <div class="flex justify-between text-xs mb-2 italic font-extralight">
          <span class="title">Jornada {{ score.round }}</span>
          <span>{{ score.date }} ({{ score.time.slice(0, -3) }})</span>
        </div>

        <ScoreTable
          :local="{
            name: score.localPrettyName,
            score: score.localScore,
            quarters: score.localQuarters,
            imageUrl: getTeamImage(score.localTeamFebId),
          }"
          :away="{
            name: score.awayPrettyName,
            score: score.awayScore,
            quarters: score.awayQuarters,
            imageUrl: getTeamImage(score.awayTeamFebId),
          }"
        />
      </div>
    </div>
  </div>
</template>
