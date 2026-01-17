<script lang="ts" setup>
import type { GameTeamStats, TeamView } from '@/types/teams'
import { onMounted, ref } from 'vue'
import TeamStatsTableRow from './TeamStatsTableRow.vue'
import { TeamService } from '@/api/teamService'
import IconHome from '@/components/icons/IconHome.vue'
import IconAway from '@/components/icons/IconAway.vue'
import TeamPoints from '../points/TeamPoints.vue'

defineProps<{ team: TeamView }>()

const league = ref<GameTeamStats>()

const loadLeagueStats = async () => {
  const { data, error } = await TeamService.getLeagueStats()
  if (error) console.log('error:', error)
  league.value = data
}

onMounted(async () => await Promise.all([loadLeagueStats()]))
</script>

<template>
  <div v-if="!team">Se ha producido un error</div>
  <template v-else>
    <div class="mx-auto max-w-150 my-8 px-8">
      <div class="shadow-2xl bg-white-pure rounded-lg overflow-hidden">
        <table class="text-left w-full">
          <tbody>
            <tr class="border-b border-gray-100">
              <td class="w-1/5 py-3"></td>
              <td class="w-1/5 py-3">
                <div class="flex justify-center items-center">
                  <img src="/src/assets/images/FebLogoHorizontal.webp" class="h-8 max-w-fit" />
                </div>
              </td>
              <td class="w-1/5 py-3">
                <div class="flex justify-center items-center">
                  <img
                    :src="`https://imagenes.feb.es/Imagen.aspx?i=${team.febId}&ti=1`"
                    class="max-h-8 w-8 rounded-full object-contain"
                  />
                </div>
              </td>
              <td class="w-1/5 py-3">
                <div class="flex justify-center items-center text-orange-300">
                  <component :is="IconHome" :size="28" />
                  <!-- <img
                    v-if="selectedTeam !== '0'"
                    :src="`https://imagenes.feb.es/Imagen.aspx?i=${selectedTeam}&ti=1`"
                    class="h-8 w-8 rounded-full"
                  /> -->
                </div>
              </td>
              <td class="w-1/5 py-3 text-orange-300">
                <div class="flex justify-center items-center">
                  <component :is="IconAway" :size="28" />
                </div>
              </td>
            </tr>
            <TeamStatsTableRow
              label="PT"
              :total="team.teamStats.total.points"
              :local="team.teamStats.local.points"
              :away="team.teamStats.away.points"
              :league="league?.points"
              :better="true"
            />
            <TeamStatsTableRow
              label="T2"
              :total="team.teamStats.total.twoPoints.attempted"
              :local="team.teamStats.local.twoPoints.attempted"
              :away="team.teamStats.away.twoPoints.attempted"
              :league="league?.twoPoints.attempted"
              :better="true"
            />
            <TeamStatsTableRow
              label="%T2"
              :total="team.teamStats.total.twoPoints.percentage"
              :local="team.teamStats.local.twoPoints.percentage"
              :away="team.teamStats.away.twoPoints.percentage"
              :league="league?.twoPoints.percentage"
              :better="true"
              percentage
            />
            <TeamStatsTableRow
              label="T3"
              :total="team.teamStats.total.threePoints.attempted"
              :local="team.teamStats.local.threePoints.attempted"
              :away="team.teamStats.away.threePoints.attempted"
              :league="league?.threePoints.attempted"
              :better="true"
            />
            <TeamStatsTableRow
              label="%T3"
              :total="team.teamStats.total.threePoints.percentage"
              :local="team.teamStats.local.threePoints.percentage"
              :away="team.teamStats.away.threePoints.percentage"
              :league="league?.threePoints.percentage"
              :better="true"
              percentage
            />
            <TeamStatsTableRow
              label="TL"
              :total="team.teamStats.total.freeThrows.attempted"
              :local="team.teamStats.local.freeThrows.attempted"
              :away="team.teamStats.away.freeThrows.attempted"
              :league="league?.freeThrows.attempted"
              :better="true"
            />
            <TeamStatsTableRow
              label="%TL"
              :total="team.teamStats.total.freeThrows.percentage"
              :local="team.teamStats.local.freeThrows.percentage"
              :away="team.teamStats.away.freeThrows.percentage"
              :league="league?.freeThrows.percentage"
              :better="true"
              percentage
            />
            <TeamStatsTableRow
              label="RO"
              :total="team.teamStats.total.offensiveRebounds"
              :local="team.teamStats.local.offensiveRebounds"
              :away="team.teamStats.away.offensiveRebounds"
              :league="league?.offensiveRebounds"
              :better="true"
            />
            <TeamStatsTableRow
              label="RD"
              :total="team.teamStats.total.defensiveRebounds"
              :local="team.teamStats.local.defensiveRebounds"
              :away="team.teamStats.away.defensiveRebounds"
              :league="league?.defensiveRebounds"
              :better="true"
            />
            <TeamStatsTableRow
              label="RT"
              :total="team.teamStats.total.totalRebounds"
              :local="team.teamStats.local.totalRebounds"
              :away="team.teamStats.away.totalRebounds"
              :league="league?.totalRebounds"
              :better="true"
            />
            <TeamStatsTableRow
              label="AS"
              :total="team.teamStats.total.assists"
              :local="team.teamStats.local.assists"
              :away="team.teamStats.away.assists"
              :league="league?.assists"
              :better="true"
            />
            <TeamStatsTableRow
              label="BR"
              :total="team.teamStats.total.steals"
              :local="team.teamStats.local.steals"
              :away="team.teamStats.away.steals"
              :league="league?.steals"
              :better="true"
            />
            <TeamStatsTableRow
              label="BP"
              :total="team.teamStats.total.turnovers"
              :local="team.teamStats.local.turnovers"
              :away="team.teamStats.away.turnovers"
              :league="league?.turnovers"
              :better="false"
            />
            <TeamStatsTableRow
              label="FC"
              :total="team.teamStats.total.foulsCommitted"
              :local="team.teamStats.local.foulsCommitted"
              :away="team.teamStats.away.foulsCommitted"
              :league="league?.foulsCommitted"
              :better="null"
            />
            <TeamStatsTableRow
              label="FR"
              :total="team.teamStats.total.foulsDrawn"
              :local="team.teamStats.local.foulsDrawn"
              :away="team.teamStats.away.foulsDrawn"
              :league="league?.foulsDrawn"
              :better="null"
            />
            <TeamStatsTableRow
              label="VA"
              :total="team.teamStats.total.pir"
              :local="team.teamStats.local.pir"
              :away="team.teamStats.away.pir"
              :league="league?.pir"
              :better="true"
              no-border
            />
          </tbody>
        </table>
      </div>

      <TeamPoints :name="team.prettyName" :points="team.points" :feb-id="team.febId" />
    </div>
  </template>
</template>

<style scoped>
table th {
  font-weight: 300;
}
</style>
