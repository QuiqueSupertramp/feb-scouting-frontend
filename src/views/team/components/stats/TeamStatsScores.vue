<script lang="ts" setup>
import ScoreTable from '@/components/scores/ScoreTable.vue'
import { getTeamImage } from '@/helpers/feb'
import type { PointsStats } from '@/types/teams'

interface Props {
  pointsStats: PointsStats
  name: string
  febId: string
}

defineProps<Props>()

const getTitle = (key: string) => {
  if (key === 'total') return 'Totales'
  if (key === 'local') return 'Como local'
  if (key === 'away') return 'Como visitante'

  return '-'
}
</script>

<template>
  <div class="flex flex-col gap-8 my-8">
    <div
      v-for="(points, key) in pointsStats"
      :key="key"
      class="relative w-full mt-8 rounded-lg rounded-tl-none max-w-100 mx-auto"
    >
      <div class="absolute bg-orange h-8 px-4 -top-8 rounded-t-lg flex items-center">
        <span class="italic text-xs">{{ getTitle(key) }}</span>
      </div>

      <ScoreTable
        :local="{
          name: name,
          score: points.points,
          quarters: points.quarters,
          imageUrl: getTeamImage(febId),
        }"
        :away="{
          name: 'Rivales',
          score: points.pointsAgainst,
          quarters: points.quartersAgainst,
          imageUrl: undefined,
        }"
      />
    </div>
  </div>
</template>
