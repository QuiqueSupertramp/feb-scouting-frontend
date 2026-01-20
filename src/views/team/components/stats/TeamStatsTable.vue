<script lang="ts" setup>
import IconAway from '@/components/icons/IconAway.vue'
import IconHome from '@/components/icons/IconHome.vue'
import TeamStatsTableRow from './TeamStatsTableRow.vue'
import type { GameTeamStats, GameTeamStatsList } from '@/types/teams'
import { getTeamImage } from '@/helpers/feb'

interface Props {
  febId: string
  teamStats: GameTeamStatsList
  league?: GameTeamStats
}

defineProps<Props>()
</script>

<template>
  <div class="shadow-2xl bg-white-pure rounded-lg overflow-hidden max-w-100 w-full mx-auto">
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
              <img :src="getTeamImage(febId)" class="max-h-8 max-w-8 rounded-full" />
            </div>
          </td>
          <td class="w-1/5 py-3">
            <div class="flex justify-center items-center text-orange-300">
              <component :is="IconHome" :size="28" />
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
          :total="teamStats.total.points"
          :local="teamStats.local.points"
          :away="teamStats.away.points"
          :league="league?.points"
          :better="true"
        />
        <TeamStatsTableRow
          label="T2"
          :total="teamStats.total.twoPoints.attempted"
          :local="teamStats.local.twoPoints.attempted"
          :away="teamStats.away.twoPoints.attempted"
          :league="league?.twoPoints.attempted"
          :better="true"
        />
        <TeamStatsTableRow
          label="%T2"
          :total="teamStats.total.twoPoints.percentage"
          :local="teamStats.local.twoPoints.percentage"
          :away="teamStats.away.twoPoints.percentage"
          :league="league?.twoPoints.percentage"
          :better="true"
          percentage
        />
        <TeamStatsTableRow
          label="T3"
          :total="teamStats.total.threePoints.attempted"
          :local="teamStats.local.threePoints.attempted"
          :away="teamStats.away.threePoints.attempted"
          :league="league?.threePoints.attempted"
          :better="true"
        />
        <TeamStatsTableRow
          label="%T3"
          :total="teamStats.total.threePoints.percentage"
          :local="teamStats.local.threePoints.percentage"
          :away="teamStats.away.threePoints.percentage"
          :league="league?.threePoints.percentage"
          :better="true"
          percentage
        />
        <TeamStatsTableRow
          label="TL"
          :total="teamStats.total.freeThrows.attempted"
          :local="teamStats.local.freeThrows.attempted"
          :away="teamStats.away.freeThrows.attempted"
          :league="league?.freeThrows.attempted"
          :better="true"
        />
        <TeamStatsTableRow
          label="%TL"
          :total="teamStats.total.freeThrows.percentage"
          :local="teamStats.local.freeThrows.percentage"
          :away="teamStats.away.freeThrows.percentage"
          :league="league?.freeThrows.percentage"
          :better="true"
          percentage
        />

        <TeamStatsTableRow
          label="RO"
          :total="teamStats.total.offensiveRebounds"
          :local="teamStats.local.offensiveRebounds"
          :away="teamStats.away.offensiveRebounds"
          :league="league?.offensiveRebounds"
          :better="true"
        />
        <TeamStatsTableRow
          label="RD"
          :total="teamStats.total.defensiveRebounds"
          :local="teamStats.local.defensiveRebounds"
          :away="teamStats.away.defensiveRebounds"
          :league="league?.defensiveRebounds"
          :better="true"
        />
        <TeamStatsTableRow
          label="RT"
          :total="teamStats.total.totalRebounds"
          :local="teamStats.local.totalRebounds"
          :away="teamStats.away.totalRebounds"
          :league="league?.totalRebounds"
          :better="true"
        />

        <TeamStatsTableRow
          label="AS"
          :total="teamStats.total.assists"
          :local="teamStats.local.assists"
          :away="teamStats.away.assists"
          :league="league?.assists"
          :better="true"
        />
        <TeamStatsTableRow
          label="BR"
          :total="teamStats.total.steals"
          :local="teamStats.local.steals"
          :away="teamStats.away.steals"
          :league="league?.steals"
          :better="true"
        />
        <TeamStatsTableRow
          label="BP"
          :total="teamStats.total.turnovers"
          :local="teamStats.local.turnovers"
          :away="teamStats.away.turnovers"
          :league="league?.turnovers"
          :better="false"
        />
        <TeamStatsTableRow
          label="FC"
          :total="teamStats.total.foulsCommitted"
          :local="teamStats.local.foulsCommitted"
          :away="teamStats.away.foulsCommitted"
          :league="league?.foulsCommitted"
          :better="null"
        />
        <TeamStatsTableRow
          label="FR"
          :total="teamStats.total.foulsDrawn"
          :local="teamStats.local.foulsDrawn"
          :away="teamStats.away.foulsDrawn"
          :league="league?.foulsDrawn"
          :better="null"
        />
        <TeamStatsTableRow
          label="VA"
          :total="teamStats.total.pir"
          :local="teamStats.local.pir"
          :away="teamStats.away.pir"
          :league="league?.pir"
          :better="true"
          no-border
        />
      </tbody>
    </table>
  </div>
</template>
