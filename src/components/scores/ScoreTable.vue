<script lang="ts" setup>
import type { Quarters } from '@/types/teams'
import ScoreRow from './ScoreRow.vue'

interface Props {
  local: {
    score: number
    quarters: Quarters
    name: string
    imageUrl?: string
  }
  away: {
    score: number
    quarters: Quarters
    name: string
    imageUrl?: string
  }
}

defineProps<Props>()
</script>

<template>
  <div class="bg-white-pure p-4 flex flex-col gap-2 rounded-lg shadow-2xl">
    <ScoreRow
      :score="local.score"
      :quarters="local.quarters"
      :image-url="local.imageUrl"
      :name="local.name"
    />
    <div class="h-px w-full bg-gray-200"></div>
    <ScoreRow
      :score="away.score"
      :quarters="away.quarters"
      :image-url="away.imageUrl"
      :name="away.name"
    />
  </div>
</template>
