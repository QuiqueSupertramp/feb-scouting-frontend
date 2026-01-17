<script lang="ts" setup>
import type { TeamView } from '@/types/teams'

defineProps<{ team: TeamView }>()
</script>

<template>
  <header v-if="team" class="px-4 flex gap-6 items-center py-4 mb-8 bg-cyan-600">
    <img
      :src="`https://imagenes.feb.es/Imagen.aspx?i=${team.febId}&ti=1`"
      :alt="team.name"
      class="h-20 w-20 rounded-full"
    />
    <div class="flex flex-col items-start gap-1 text-white">
      <div class="flex gap-2 text-sm italic">
        <span>Tercera FEB Grupo C-A</span>
      </div>
      <span class="text-balance text-lg font-bold tracking-wide text-white-pure">
        {{ team.name }}
      </span>
    </div>
  </header>
</template>
