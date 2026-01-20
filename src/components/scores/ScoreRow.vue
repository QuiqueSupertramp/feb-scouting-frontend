<script lang="ts" setup>
import type { Quarters } from '@/types/teams'

interface Props {
  score: number
  quarters: Quarters
  name: string
  imageUrl?: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center gap-2 max-w-full">
    <div class="shrink-0 h-8 w-8 rounded-full bg-cyan-200">
      <img v-if="imageUrl" :src="imageUrl" class="h-8 w-8 rounded-full" />
    </div>
    <div class="flex-1 text-balance pr-1">
      <span>{{ name }}</span>
    </div>
    <div class="shrink-0 flex justify-center items-center h-full gap-2 font-light text-xs pt-px">
      <div v-for="(points, index) in quarters" :key="index" class="w-4 text-center">
        {{ points }}
      </div>
    </div>
    <div class="shrink-0 w-8 text-right text-xl title">
      <span>{{ score }}</span>
    </div>
  </div>
</template>
