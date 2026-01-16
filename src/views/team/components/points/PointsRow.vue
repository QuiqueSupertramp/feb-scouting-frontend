<script lang="ts" setup>
import { getTeamImage } from '@/helpers/feb'
import type { Quarters } from '@/types/teams'

interface Props {
  points: number
  quarters: Quarters
  teamId?: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex justify-between items-center gap-2">
    <div class="h-8 w-8 rounded-full bg-cyan-200">
      <img v-if="teamId" :src="getTeamImage(teamId)" class="h-8 w-8 rounded-full" />
    </div>
    <div class="flex items-center h-full gap-4">
      <div v-for="(points, index) in quarters" :key="index">{{ points }}</div>
    </div>
    <div class="text-xl title">{{ points }}</div>
  </div>
</template>
