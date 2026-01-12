<script lang="ts" setup>
import type { TeamView } from '@/types/teams'
import ScoreRow from './ScoreRow.vue'

interface Props {
  team: TeamView
}

defineProps<Props>()
</script>

<template>
  <div class="px-4 my-8">
    <div class="max-w-87 mx-auto flex flex-col gap-5">
      <div v-for="score in team.scores" :key="score.gameFebId">
        <div class="flex justify-between text-xs mb-2 italic">
          <span>Jornada {{ score.round }}</span>
          <span>{{ score.date }} ({{ score.time.slice(0, -3) }})</span>
        </div>

        <div class="bg-white-pure p-4 flex flex-col gap-2 rounded-lg shadow">
          <ScoreRow
            :id="score.localTeamFebId"
            :points="score.localScore"
            class="border-b pb-2 border-gray-200"
          />
          <ScoreRow :id="score.awayTeamFebId" :points="score.awayScore" />
        </div>
      </div>
    </div>
  </div>
</template>
