<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import type { Score, Team, TeamView } from '@/types/teams'
import { TeamService } from '@/api/teamService'

interface Props {
  local: TeamView
  away: TeamView
}

const props = defineProps<Props>()

const allTeamsData = ref<Team[]>([])

const loadTeams = async () => {
  const { data, error } = await TeamService.getTeams()
  if (error) console.log('error:', error)
  allTeamsData.value = data ?? []
}

const teams = computed(() => {
  const local = {
    febId: props.local.febId,
    name: props.local.prettyName,
    scores: props.local.scores.slice(0, 5).map((s) => ({
      gameFebId: s.gameFebId,
      result: `${s.localScore} - ${s.awayScore}`,
      teams: `${s.localPrettyName} - ${s.awayTeamFebId}`,
      isWinOrLost: difference(s, props.local.febId) > 0 ? 'WIN' : 'LOST',
      local: {
        score: s.localScore,
        name: s.localPrettyName,
        isLocal: s.localTeamFebId === props.local.febId,
      },
      away: {
        score: s.awayScore,
        name: s.awayPrettyName,
        isLocal: s.awayTeamFebId === props.local.febId,
      },
    })),
  }
  const away = {
    febId: props.away.febId,
    name: props.away.prettyName,
    scores: props.away.scores.slice(0, 5).map((s) => ({
      gameFebId: s.gameFebId,
      result: `${s.localScore} - ${s.awayScore}`,
      teams: `${s.localPrettyName} - ${s.awayTeamFebId}`,
      isWinOrLost: difference(s, props.away.febId) > 0 ? 'WIN' : 'LOST',
      local: {
        score: s.localScore,
        name: s.localPrettyName,
        isLocal: s.localTeamFebId === props.away.febId,
      },
      away: {
        score: s.awayScore,
        name: s.awayPrettyName,
        isLocal: s.awayTeamFebId === props.away.febId,
      },
    })),
  }

  return [local, away]
})

const difference = (score: Score, febId: string) => {
  const isLocal = score.localTeamFebId === febId
  const myScore = isLocal ? score.localScore : score.awayScore
  const otherScore = isLocal ? score.awayScore : score.localScore
  return myScore - otherScore
}

onMounted(loadTeams)
</script>

<template>
  <div class="font-bold text-2xl mt-4">ULTIMOS PARTIDOS</div>
  <div class="grid grid-cols-2 gap-8">
    <div v-for="(team, index) in teams" :key="index">
      <table class="w-full text-center bg-white-pure">
        <thead class="bg-cyan-100">
          <tr>
            <th scope="col" class="text-center uppercase title" colspan="4">
              {{ team.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="score in team.scores"
            :key="score.gameFebId"
            :class="{ 'bg-green-100': score.isWinOrLost === 'WIN' }"
          >
            <!-- <td scope="col">
              {{ score.isWinOrLost }}
            </td> -->
            <td
              scope="col"
              class="text-right w-4/10"
              :class="{ 'text-gray-900': score.local.isLocal }"
            >
              {{ score.local.name }}
            </td>
            <td scope="col" class="w-1/10">{{ score.local.score }}</td>
            <td scope="col" class="w-1/10">{{ score.away.score }}</td>
            <td
              scope="col"
              class="text-left w-4/10"
              :class="{ 'text-gray-900': score.away.isLocal }"
            >
              {{ score.away.name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
