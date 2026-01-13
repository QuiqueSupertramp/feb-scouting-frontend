<script lang="ts" setup>
import { useTeamsStore } from '@/stores/teams'
import TeamViewItem from './TeamViewItem.vue'

const teamsStore = useTeamsStore()
</script>

<template>
  <div
    v-if="!teamsStore.isLoading && teamsStore.teams"
    class="px-4 grid grid-cols-1 sm:grid-cols-2 gap-4 my-10"
  >
    <TeamViewItem v-for="team in teamsStore.teams" :key="team.febId" :team="team" />
  </div>
</template>
