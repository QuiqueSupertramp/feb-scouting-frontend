<script lang="ts" setup>
import { getTeamImage } from '@/helpers/feb'

interface Props {
  id: string
  name: string
  points: number
}
defineProps<Props>()
</script>

<template>
  <div class="flex justify-between items-center gap-2">
    <div class="flex items-center gap-3">
      <div class="h-8 w-8 rounded-full bg-cyan-200">
        <img :src="getTeamImage(id)" class="h-8 w-8 rounded-full" />
      </div>
      <span class="text-balance font-light">{{ name }}</span>
    </div>
    <div class="text-xl title">{{ points }}</div>
  </div>
</template>
