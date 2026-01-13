<script lang="ts" setup>
import { useTeamsStore } from '@/stores/teams'
import TeamViewItem from './TeamViewItem.vue'

const teamsStore = useTeamsStore()
</script>

<template>
  <div
    v-if="!teamsStore.isLoading && teamsStore.teams"
    class="px-8 grid grid-cols-2 sm:grid-cols-3 gap-6 my-10"
  >
    <TeamViewItem v-for="team in teamsStore.teams" :key="team.febId" :team="team" />
  </div>
</template>
