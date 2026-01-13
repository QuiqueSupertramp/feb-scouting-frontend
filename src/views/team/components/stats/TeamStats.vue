<script lang="ts" setup>
import { Network } from '@/api/network'
import { useTeamsStore } from '@/stores/teams'
import type { GameTeamStats, TeamStatsView, TeamView } from '@/types/teams'
import { computed, onMounted, ref } from 'vue'
import TeamStatsTableRow from './TeamStatsTableRow.vue'

interface Props {
  team: TeamView
}

const props = defineProps<Props>()

const teamsStore = useTeamsStore()

const teamsOptions = computed(() => {
  return teamsStore.teams.filter((t) => t.febId !== props.team.teamFebId)
})

const selectedTeam = ref('0')

const awayTeam = ref<TeamStatsView>()
const hasError = ref(false)
const isLoading = ref(false)
const league = ref<GameTeamStats>()

const loadAwayTeam = async (e: Event) => {
  isLoading.value = true
  const teamId = (e.target as HTMLInputElement).value
  awayTeam.value = undefined

  const { data, error } = await Network.get<TeamStatsView>(`team-stats/${teamId}`)

  hasError.value = !!error
  selectedTeam.value = error ? '0' : teamId
  awayTeam.value = error ? undefined : data
  isLoading.value = false
}

const loadLeagueStats = async () => {
  const { data } = await Network.get<GameTeamStats>(`team-stats`)
  league.value = data
}

onMounted(loadLeagueStats)
</script>

<template>
  <div v-if="!team">Se ha producido un error</div>
  <template v-else>
    <div class="mx-auto max-w-87 mb-8">
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
              <td class="pl-4 pr-4 py-3 w-1/4 title">GLOBALES</td>
              <td class="py-3 w-1/4">
                <div class="flex justify-center items-center">
                  <img src="/src/assets/images/FebLogo.png" class="h-8 w-8" />
                </div>
              </td>
              <td class="py-3 w-1/4">
                <div class="flex justify-center items-center">
                  <img
                    :src="`https://imagenes.feb.es/Imagen.aspx?i=${team.teamFebId}&ti=1`"
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
              :local="team.teamStats.points"
              :away="awayTeam?.stats.points"
              :league="league?.points"
              :better="true"
            />
            <TeamStatsTableRow
              label="T2"
              :local="team.teamStats.twoPoints.percentage"
              :away="awayTeam?.stats.twoPoints.percentage"
              :league="league?.twoPoints.percentage"
              :better="true"
              percentage
            />
            <TeamStatsTableRow
              label="T3"
              :local="team.teamStats.threePoints.percentage"
              :away="awayTeam?.stats.threePoints.percentage"
              :league="league?.threePoints.percentage"
              :better="true"
              percentage
            />
            <TeamStatsTableRow
              label="TL"
              :local="team.teamStats.freeThrows.percentage"
              :away="awayTeam?.stats.freeThrows.percentage"
              :league="league?.freeThrows.percentage"
              :better="true"
              percentage
            />
            <TeamStatsTableRow
              label="RO"
              :local="team.teamStats.offensiveRebounds"
              :away="awayTeam?.stats.offensiveRebounds"
              :league="league?.offensiveRebounds"
              :better="true"
            />
            <TeamStatsTableRow
              label="RD"
              :local="team.teamStats.defensiveRebounds"
              :away="awayTeam?.stats.defensiveRebounds"
              :league="league?.defensiveRebounds"
              :better="true"
            />
            <TeamStatsTableRow
              label="RT"
              :local="team.teamStats.totalRebounds"
              :away="awayTeam?.stats.totalRebounds"
              :league="league?.totalRebounds"
              :better="true"
            />
            <TeamStatsTableRow
              label="AS"
              :local="team.teamStats.assists"
              :away="awayTeam?.stats.assists"
              :league="league?.assists"
              :better="true"
            />
            <TeamStatsTableRow
              label="BR"
              :local="team.teamStats.steals"
              :away="awayTeam?.stats.steals"
              :league="league?.steals"
              :better="true"
            />
            <TeamStatsTableRow
              label="BP"
              :local="team.teamStats.turnovers"
              :away="awayTeam?.stats.turnovers"
              :league="league?.turnovers"
              :better="false"
            />
            <TeamStatsTableRow
              label="FC"
              :local="team.teamStats.foulsCommitted"
              :away="awayTeam?.stats.foulsCommitted"
              :league="league?.foulsCommitted"
              :better="null"
            />
            <TeamStatsTableRow
              label="FR"
              :local="team.teamStats.foulsDrawn"
              :away="awayTeam?.stats.foulsDrawn"
              :league="league?.foulsDrawn"
              :better="null"
            />
            <TeamStatsTableRow
              label="VA"
              :local="team.teamStats.pir"
              :away="awayTeam?.stats.pir"
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
