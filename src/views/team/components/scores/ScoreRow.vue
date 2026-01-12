<script lang="ts" setup>
import { getTeamImage } from '@/helpers/feb'
import { useTeamsStore } from '@/stores/teams'
import { computed } from 'vue'

interface Props {
  id: string
  points: number
}
const props = defineProps<Props>()

const teamsStore = useTeamsStore()

const team = computed(() => teamsStore.teams.find((t) => t.febId === props.id))
</script>

<template>
  <div class="flex justify-between items-center gap-2">
    <div class="flex items-center gap-3">
      <div class="h-8 w-8 rounded-full bg-cyan-200">
        <img :src="getTeamImage(id)" class="h-8 w-8 rounded-full" />
      </div>
      <span class="text-balance font-light">{{ team?.prettyName ?? '-' }}</span>
    </div>
    <div class="text-xl title">{{ points }}</div>
  </div>
</template>
