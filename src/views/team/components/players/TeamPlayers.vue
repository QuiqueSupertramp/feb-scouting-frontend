<script lang="ts" setup>
import type { TeamView } from '@/types/teams'
import { formatPlayerName } from '../../../../helpers/players'

interface Props {
  team: TeamView
}

const props = defineProps<Props>()

const sortPlayers = () => {
  const playerStats = [...props.team.playerStats]
  return playerStats
    .sort((a, b) => b.stats.pir - a.stats.pir)
    .map((p) => ({
      ...p,
      stats: {
        points: Math.round(p.stats.points),
        totalRebounds: Math.round(p.stats.totalRebounds),
        assists: Math.round(p.stats.assists),
        threePoints: Math.round(p.stats.threePoints.percentage ?? 0),
        freeThrows: Math.round(p.stats.freeThrows.percentage ?? 0),
        pir: p.stats.pir.toFixed(1),
      },
    }))
}
</script>

<template>
  <div class="mx-auto max-w-138 px-8 pb-6">
    <div class="shadow-2xl bg-white-pure mt-8 rounded-lg overflow-hidden">
      <table class="w-full text-center">
        <tbody>
          <tr class="title">
            <td class="py-3 w-1/7"></td>
            <td class="py-3 w-1/7">PT</td>
            <td class="py-3 w-1/7">RB</td>
            <td class="py-3 w-1/7">AS</td>
            <td class="py-3 w-1/7">%T3</td>
            <td class="py-3 w-1/7">%TL</td>
            <td class="py-3 w-1/7 pr-2">VA</td>
          </tr>
          <template v-for="(player, i) in sortPlayers()" :key="player.playerFebId">
            <tr :class="{ 'bg-cyan-100': i % 2 === 0 }">
              <td class="w-1/6" rowspan="2">
                <img
                  :src="`https://imagenes.feb.es/Foto.aspx?c=${player.playerFebId}`"
                  class="h-10 w-10 mx-auto rounded-full object-cover bg-white border border-gray-200"
                />
              </td>
              <td class="pl-1 pt-3 text-left font-light" colspan="6">
                {{ formatPlayerName(player.name) }}
              </td>
            </tr>

            <tr class="border-b border-gray-100 title" :class="{ 'bg-cyan-100': i % 2 === 0 }">
              <td class="pt-1 pb-3">{{ player.stats.points }}</td>
              <td class="pt-1 pb-3">{{ player.stats.totalRebounds }}</td>
              <td class="pt-1 pb-3">{{ player.stats.assists }}</td>
              <td class="pt-1 pb-3">{{ player.stats.threePoints }}%</td>
              <td class="pt-1 pb-3">{{ player.stats.freeThrows }}%</td>
              <td class="pt-1 pb-3 pr-2">{{ player.stats.pir }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
