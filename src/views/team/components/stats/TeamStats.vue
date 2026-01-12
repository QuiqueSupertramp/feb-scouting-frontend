<script lang="ts" setup>
import { Network } from '@/api/network'
import { useTeamsStore } from '@/stores/teams'
import type { TeamView } from '@/types/teams'
import { computed, ref } from 'vue'
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

const awayTeam = ref<TeamView>()
const hasError = ref(false)
const isLoading = ref(false)

const loadAwayTeam = async (e: Event) => {
  isLoading.value = true
  const teamId = (e.target as HTMLInputElement).value
  awayTeam.value = undefined

  const { data, error } = await Network.get<TeamView>(`teams/${teamId}`)

  hasError.value = !!error
  selectedTeam.value = error ? '0' : teamId
  awayTeam.value = error ? undefined : data
  isLoading.value = false
}
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
              <td class="pl-4 pr-4 py-3 w-1/2 title">GLOBALES</td>
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
              label="Puntos"
              :local="team.stats.points"
              :away="awayTeam?.stats.points"
            />
            <TeamStatsTableRow
              label="Tiros de 2"
              :local="team.stats.twoPoints.percentage"
              :away="awayTeam?.stats.twoPoints.percentage"
              percentage
            />
            <TeamStatsTableRow
              label="Tiros de 3"
              :local="team.stats.threePoints.percentage"
              :away="awayTeam?.stats.threePoints.percentage"
              percentage
            />
            <TeamStatsTableRow
              label="Tiros Libres"
              :local="team.stats.freeThrows.percentage"
              :away="awayTeam?.stats.freeThrows.percentage"
              percentage
            />
            <TeamStatsTableRow
              label="Reb. Ofensivos"
              :local="team.stats.offensiveRebounds"
              :away="awayTeam?.stats.offensiveRebounds"
            />
            <TeamStatsTableRow
              label="Reb. Defensivos"
              :local="team.stats.defensiveRebounds"
              :away="awayTeam?.stats.defensiveRebounds"
            />
            <TeamStatsTableRow
              label="Reb. Totales"
              :local="team.stats.totalRebounds"
              :away="awayTeam?.stats.totalRebounds"
            />
            <TeamStatsTableRow
              label="Asistencias"
              :local="team.stats.assists"
              :away="awayTeam?.stats.assists"
            />
            <TeamStatsTableRow
              label="Balones Recuperados"
              :local="team.stats.steals"
              :away="awayTeam?.stats.steals"
            />
            <TeamStatsTableRow
              label="Balones Perdidos"
              :local="team.stats.turnovers"
              :away="awayTeam?.stats.turnovers"
            />
            <TeamStatsTableRow
              label="Faltas Cometidas"
              :local="team.stats.foulsCommitted"
              :away="awayTeam?.stats.foulsCommitted"
            />
            <TeamStatsTableRow
              label="Faltas Recibidas"
              :local="team.stats.foulsDrawn"
              :away="awayTeam?.stats.foulsDrawn"
            />
            <TeamStatsTableRow
              label="Valoracion"
              :local="team.stats.pir"
              :away="awayTeam?.stats.pir"
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
