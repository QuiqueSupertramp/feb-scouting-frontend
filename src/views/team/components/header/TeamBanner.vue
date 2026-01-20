<script lang="ts" setup>
import { getTeamImage } from '@/helpers/feb'

defineProps<{ febId: string; name: string }>()
</script>

<template>
  <header class="px-8 flex gap-6 items-center py-4 mb-8 bg-cyan-600">
    <img :src="getTeamImage(febId)" :alt="name" class="h-20 w-20 rounded-full" />
    <div class="flex flex-col items-start gap-1 text-white">
      <div class="flex gap-2 text-sm italic">
        <span>Tercera FEB Grupo C-A</span>
      </div>
      <span class="text-balance text-lg font-bold tracking-wide text-white-pure">
        {{ name }}
      </span>
    </div>
  </header>
</template>
