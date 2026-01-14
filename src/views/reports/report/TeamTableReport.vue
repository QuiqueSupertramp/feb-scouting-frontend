<script lang="ts" setup>
import { computed } from 'vue'
import type { GameTeamStats, TeamView } from '@/types/teams'

interface Props {
  local: TeamView
  away: TeamView
  league: GameTeamStats
}

const props = defineProps<Props>()

// const league = ref<TeamStats>()

// const loadleague = async () => (league.value = await teamsStore.getleague())

const teams = computed(() => {
  const local = {
    id: props.local.febId,
    name: props.local.prettyName,
    ...props.local.teamStats,
  }
  const away = {
    id: props.away.febId,
    name: props.away.prettyName,
    ...props.away.teamStats,
  }
  const league = {
    id: '0',
    name: 'Tercera Feb C-A',
    ...props.league,
  }

  return [local, away, league].filter((x) => !!x)
})

// onMounted(loadleague)
</script>

<template>
  <div>
    <table class="w-full text-center bg-white-pure">
      <thead class="title">
        <tr class="bg-cyan-100">
          <th scope="col" class="text-left pl-2!">EQUIPO</th>
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
        <tr v-for="team in teams" :key="team.id">
          <td scope="col" class="text-left" :class="{ 'border-t-4!': team.id === '0' }">
            {{ team.name }}
          </td>
          <td
            scope="col"
            :class="{
              'bg-green-100': league && team.points > league.points,
              'border-t-4!': team.id === '0',
            }"
          >
            {{ team.points }}
          </td>
          <td scope="col" :class="{ 'border-t-4!': team.id === '0' }">
            {{ Number(team.twoPoints.made.toFixed(0)) }}/{{
              Number(team.twoPoints.attempted.toFixed(0))
            }}
          </td>
          <td
            scope="col"
            :class="{
              'bg-green-100': league && team.twoPoints.percentage > league.twoPoints.percentage,
              'border-t-4!': team.id === '0',
            }"
          >
            {{ team.twoPoints.percentage }}%
          </td>
          <td scope="col" :class="{ 'border-t-4!': team.id === '0' }">
            {{ Number(team.threePoints.made.toFixed(0)) }}/{{
              Number(team.threePoints.attempted.toFixed(0))
            }}
          </td>
          <td
            scope="col"
            :class="{
              'bg-green-100': league && team.threePoints.percentage > league.threePoints.percentage,
              'border-t-4!': team.id === '0',
            }"
          >
            {{ team.threePoints.percentage }}%
          </td>
          <td scope="col" :class="{ 'border-t-4!': team.id === '0' }">
            {{ Number(team.freeThrows.made.toFixed(0)) }}/{{
              Number(team.freeThrows.attempted.toFixed(0))
            }}
          </td>
          <td
            scope="col"
            :class="{
              'bg-green-100': league && team.freeThrows.percentage > league.freeThrows.percentage,
              'border-t-4!': team.id === '0',
            }"
          >
            {{ team.freeThrows.percentage }}%
          </td>
          <td
            scope="col"
            :class="{
              'bg-green-100': league && team.offensiveRebounds > league.offensiveRebounds,
              'border-t-4!': team.id === '0',
            }"
          >
            {{ team.offensiveRebounds }}
          </td>
          <td
            scope="col"
            :class="{
              'bg-green-100': league && team.defensiveRebounds > league.defensiveRebounds,
              'border-t-4!': team.id === '0',
            }"
          >
            {{ team.defensiveRebounds }}
          </td>
          <td
            scope="col"
            :class="{
              'bg-green-100': league && team.totalRebounds > league.totalRebounds,
              'border-t-4!': team.id === '0',
            }"
          >
            {{ team.totalRebounds }}
          </td>
          <td
            scope="col"
            :class="{
              'bg-green-100': league && team.assists > league.assists,
              'border-t-4!': team.id === '0',
            }"
          >
            {{ team.assists }}
          </td>
          <td
            scope="col"
            :class="{
              'bg-green-100': league && team.steals > league.steals,
              'border-t-4!': team.id === '0',
            }"
          >
            {{ team.steals }}
          </td>
          <td
            scope="col"
            :class="{
              'bg-green-100': league && team.turnovers < league.turnovers,
              'border-t-4!': team.id === '0',
            }"
          >
            {{ team.turnovers }}
          </td>
          <td scope="col" :class="{ 'border-t-4!': team.id === '0' }">
            {{ team.foulsCommitted }}
          </td>
          <td scope="col" :class="{ 'border-t-4!': team.id === '0' }">
            {{ team.foulsDrawn }}
          </td>
          <td
            scope="col"
            :class="{
              'bg-green-100': league && team.pir > league.pir,
              'border-t-4!': team.id === '0',
            }"
          >
            {{ team.pir }}
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
