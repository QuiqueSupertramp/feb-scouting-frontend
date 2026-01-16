<script lang="ts" setup>
import type { GameTeamStats, GameTeamStatsList, Team, TeamView } from '@/types/teams'
import { computed, onMounted, ref } from 'vue'
import TeamStatsTableRow from './TeamStatsTableRow.vue'
import { TeamService } from '@/api/teamService'

const props = defineProps<{ team: TeamView }>()

const allTeamsData = ref<Team[]>([])
const league = ref<GameTeamStats>()
const awayTeam = ref<GameTeamStatsList>()
const selectedTeam = ref('0')

const teamsOptions = computed(() => {
  return allTeamsData.value.filter((t) => t.febId !== props.team.febId)
})

const loadAwayTeam = async (e: Event) => {
  const teamId = (e.target as HTMLInputElement).value
  awayTeam.value = undefined

  const { data, error } = await TeamService.getTeamStats(teamId)

  if (error) console.log('error:', error)
  selectedTeam.value = error ? '0' : teamId
  awayTeam.value = error ? undefined : data
}

const loadLeagueStats = async () => {
  const { data, error } = await TeamService.getLeagueStats()
  if (error) console.log('error:', error)
  league.value = data
}

const loadTeams = async () => {
  const { data, error } = await TeamService.getTeams()
  if (error) console.log('error:', error)
  allTeamsData.value = data ?? []
}

onMounted(async () => await Promise.all([loadLeagueStats(), loadTeams()]))
</script>

<template>
  <div v-if="!team">Se ha producido un error</div>
  <template v-else>
    <div class="mx-auto max-w-100 mb-8 px-4">
      <div class="w-full flex justify-center mb-3">
        <select
          v-if="teamsOptions"
          v-model="selectedTeam"
          @change="loadAwayTeam"
          class="outline-0 shadow-xl bg-white-pure rounded-lg px-2 py-3"
        >
          <option :value="0">Seleccionar</option>
          <option v-for="team in teamsOptions" :key="team.febId" :value="team.febId">
            {{ team.name }}
          </option>
        </select>
      </div>

      <div class="shadow-2xl bg-white-pure rounded-lg overflow-hidden mt-6">
        <table class="text-left w-full">
          <tbody>
            <tr class="border-b border-gray-100">
              <td class="pl-4 pr-4 py-3 w-1/4 title"></td>
              <td class="py-3 w-1/4">
                <div class="flex justify-center items-center">
                  <img src="/src/assets/images/FebLogoHorizontal.webp" class="h-8" />
                </div>
              </td>
              <td class="py-3 w-1/4">
                <div class="flex justify-center items-center">
                  <img
                    :src="`https://imagenes.feb.es/Imagen.aspx?i=${team.febId}&ti=1`"
                    class="h-8 w-8 rounded-full"
                  />
                </div>
              </td>
              <td class="py-3 w-1/4">
                <div class="flex justify-center items-center">
                  <img
                    v-if="selectedTeam !== '0'"
                    :src="`https://imagenes.feb.es/Imagen.aspx?i=${selectedTeam}&ti=1`"
                    class="h-8 w-8 rounded-full"
                  />
                </div>
              </td>
            </tr>
            <TeamStatsTableRow
              label="PT"
              :local="team.teamStats.total.points"
              :away="awayTeam?.total.points"
              :league="league?.points"
              :better="true"
            />
            <TeamStatsTableRow
              label="T2"
              :local="team.teamStats.total.twoPoints.percentage"
              :away="awayTeam?.total.twoPoints.percentage"
              :league="league?.twoPoints.percentage"
              :better="true"
              percentage
            />
            <TeamStatsTableRow
              label="T3"
              :local="team.teamStats.total.threePoints.percentage"
              :away="awayTeam?.total.threePoints.percentage"
              :league="league?.threePoints.percentage"
              :better="true"
              percentage
            />
            <TeamStatsTableRow
              label="TL"
              :local="team.teamStats.total.freeThrows.percentage"
              :away="awayTeam?.total.freeThrows.percentage"
              :league="league?.freeThrows.percentage"
              :better="true"
              percentage
            />
            <TeamStatsTableRow
              label="RO"
              :local="team.teamStats.total.offensiveRebounds"
              :away="awayTeam?.total.offensiveRebounds"
              :league="league?.offensiveRebounds"
              :better="true"
            />
            <TeamStatsTableRow
              label="RD"
              :local="team.teamStats.total.defensiveRebounds"
              :away="awayTeam?.total.defensiveRebounds"
              :league="league?.defensiveRebounds"
              :better="true"
            />
            <TeamStatsTableRow
              label="RT"
              :local="team.teamStats.total.totalRebounds"
              :away="awayTeam?.total.totalRebounds"
              :league="league?.totalRebounds"
              :better="true"
            />
            <TeamStatsTableRow
              label="AS"
              :local="team.teamStats.total.assists"
              :away="awayTeam?.total.assists"
              :league="league?.assists"
              :better="true"
            />
            <TeamStatsTableRow
              label="BR"
              :local="team.teamStats.total.steals"
              :away="awayTeam?.total.steals"
              :league="league?.steals"
              :better="true"
            />
            <TeamStatsTableRow
              label="BP"
              :local="team.teamStats.total.turnovers"
              :away="awayTeam?.total.turnovers"
              :league="league?.turnovers"
              :better="false"
            />
            <TeamStatsTableRow
              label="FC"
              :local="team.teamStats.total.foulsCommitted"
              :away="awayTeam?.total.foulsCommitted"
              :league="league?.foulsCommitted"
              :better="null"
            />
            <TeamStatsTableRow
              label="FR"
              :local="team.teamStats.total.foulsDrawn"
              :away="awayTeam?.total.foulsDrawn"
              :league="league?.foulsDrawn"
              :better="null"
            />
            <TeamStatsTableRow
              label="VA"
              :local="team.teamStats.total.pir"
              :away="awayTeam?.total.pir"
              :league="league?.pir"
              :better="true"
              no-border
            />
          </tbody>
        </table>
      </div>
    </div>
  </template>
</template>

<style scoped>
table th {
  font-weight: 300;
}
</style>
