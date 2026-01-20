<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { TeamService } from '@/api/teamService'
import TeamStatsTable from './TeamStatsTable.vue'
import TeamStatsScores from './TeamStatsScores.vue'
import type { GameTeamStats, TeamView } from '@/types/teams'

defineProps<{ team: TeamView }>()

const league = ref<GameTeamStats>()

const loadLeagueStats = async () => {
  const { data, error } = await TeamService.getLeagueStats()
  if (error) console.log('error:', error)
  league.value = data
}

onMounted(loadLeagueStats)
</script>

<template>
  <div v-if="!team">Se ha producido un error</div>
  <template v-else>
    <div class="my-8 px-8 flex flex-col gap-8">
      <TeamStatsTable :feb-id="team.febId" :team-stats="team.teamStats" :league="league" />
      <TeamStatsScores :points-stats="team.points" :name="team.prettyName" :feb-id="team.febId" />
    </div>
  </template>
</template>
