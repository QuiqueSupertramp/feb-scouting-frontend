<script lang="ts" setup>
import { getTeamImage } from '@/helpers/feb'
import type { Quarters } from '@/types/teams'

interface Props {
  points: number
  quarters: Quarters
  teamId?: string
  name: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex justify-between items-center gap-4 w-full">
    <div class="flex items-center gap-3">
      <div class="h-8 w-8 rounded-full bg-cyan-200">
        <img v-if="teamId" :src="getTeamImage(teamId)" class="h-8 w-8 rounded-full" />
      </div>
      <span>{{ teamId ? name : 'Rivales' }}</span>
    </div>
    <div class="flex items-center justify-end gap-6">
      <div class="flex justify-center items-center h-full gap-2 font-light text-xs">
        <div v-for="(points, index) in quarters" :key="index">{{ points }}</div>
      </div>
      <div class="text-xl title">{{ points }}</div>
    </div>
  </div>
</template>
