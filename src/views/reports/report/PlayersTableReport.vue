<script lang="ts" setup>
import { computed } from 'vue'
import type { TeamView } from '@/types/teams'
import { formatPlayerName } from '../../../helpers/players'

interface Props {
  local: TeamView
  away: TeamView
}

const props = defineProps<Props>()

console.log('props:', props)

const teams = computed(() => {
  const local = {
    id: props.local.teamFebId,
    name: props.local.prettyName,
    players: props.local.playerStats
      .map((s) => ({
        id: s.playerFebId,
        name: s.name,
        ...s.stats,
      }))
      .sort((a, b) => b.pir - a.pir),
  }
  const away = {
    id: props.away.teamFebId,
    name: props.away.prettyName,
    players: props.away.playerStats
      .map((s) => ({
        id: s.playerFebId,
        name: s.name,
        ...s.stats,
      }))
      .sort((a, b) => b.pir - a.pir),
  }

  return [local, away].filter((x) => !!x)
})

console.log('teams:', teams)
</script>

<template>
  <div class="font-bold text-2xl mt-4">JUGADORES</div>
  <div v-for="team in teams" :key="team.id">
    <table class="w-full text-center bg-white-pure">
      <thead class="title">
        <tr class="bg-cyan-100">
          <th scope="col" class="text-left pl-2!">{{ team.name }}</th>
          <th scope="col">PT</th>
          <th scope="col">T2</th>
          <th scope="col">%T2</th>
          <th scope="col">T3</th>
          <th scope="col">%T3</th>
          <th scope="col">TL</th>
          <th scope="col">%TL</th>
          <th scope="col">RO</th>
          <th scope="col">RD</th>
          <th scope="col">RT</th>
          <th scope="col">AS</th>
          <th scope="col">BR</th>
          <th scope="col">BP</th>
          <th scope="col">FC</th>
          <th scope="col">FR</th>
          <th scope="col">VA</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in team.players" :key="player.id">
          <td scope="col" class="text-left">
            {{ formatPlayerName(player.name) }}
          </td>
          <td scope="col">
            {{ player.points }}
          </td>
          <td scope="col">
            {{ Number(player.twoPoints.made.toFixed(0)) }}/{{
              Number(player.twoPoints.attempted.toFixed(0))
            }}
          </td>
          <td scope="col">{{ player.twoPoints.percentage }}%</td>
          <td scope="col">
            {{ Number(player.threePoints.made.toFixed(0)) }}/{{
              Number(player.threePoints.attempted.toFixed(0))
            }}
          </td>
          <td scope="col">{{ player.threePoints.percentage }}%</td>
          <td scope="col">
            {{ Number(player.freeThrows.made.toFixed(0)) }}/{{
              Number(player.freeThrows.attempted.toFixed(0))
            }}
          </td>
          <td scope="col">{{ player.freeThrows.percentage }}%</td>
          <td scope="col">
            {{ player.offensiveRebounds }}
          </td>
          <td scope="col">
            {{ player.defensiveRebounds }}
          </td>
          <td scope="col">
            {{ player.totalRebounds }}
          </td>
          <td scope="col">
            {{ player.assists }}
          </td>
          <td scope="col">
            {{ player.steals }}
          </td>
          <td scope="col">
            {{ player.turnovers }}
          </td>
          <td scope="col">
            {{ player.foulsCommitted }}
          </td>
          <td scope="col">
            {{ player.foulsDrawn }}
          </td>
          <td scope="col">
            {{ player.pir }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
thead tr th {
  padding: 0.5rem 0 0.5rem 0;
}
tbody tr td {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

th,
td {
  border: 1px solid var(--color-gray-300);
  padding: 8px 10px;
}
</style>
