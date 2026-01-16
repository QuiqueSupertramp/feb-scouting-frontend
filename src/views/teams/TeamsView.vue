<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { TeamService } from '@/api/teamService'
import TeamViewItem from './TeamViewItem.vue'

const teams = ref()

onMounted(async () => {
  const res = await TeamService.getTeams()
  if (res.data) teams.value = res.data
})
</script>

<template>
  <div v-if="teams" class="px-8 grid grid-cols-2 sm:grid-cols-3 gap-6 my-10">
    <TeamViewItem v-for="team in teams" :key="team.febId" :team="team" />
  </div>
  <div v-else></div>
</template>
