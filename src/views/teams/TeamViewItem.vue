<script lang="ts" setup>
import { getTeamImage } from '@/helpers/feb'
import type { Team } from '@/types/teams'

interface Props {
  team: Team
}

defineProps<Props>()
</script>

<template>
  <div class="shadow-xl bg-white-pure rounded-lg p-4">
    <RouterLink :to="{ name: 'team', params: { id: team.febId } }" class="flex gap-4 items-center">
      <div class="bg-cyan-500 rounded-full">
        <img
          :src="getTeamImage(team.febId)"
          :alt="team.name"
          class="h-10 md:h-12 w-10 md:w-12 rounded-full"
        />
      </div>
      <span class="text-balance">{{ team.name }}</span>
    </RouterLink>
  </div>
</template>
