<script lang="ts" setup>
import type { TeamView } from '@/types/teams'
import { computed } from 'vue'

interface Props {
  local: TeamView
  away: TeamView
}

const byLocal = () => {
  const localScores = props.local.scores.filter((s) => s.localTeamFebId === props.local.teamFebId)
  const localTotalPoints = localScores.reduce((acc, curr) => acc + curr.localScore, 0)
  const localPoints = (localTotalPoints / localScores.length).toFixed(0)
  const awayScores = props.away.scores.filter((s) => s.awayTeamFebId === props.away.teamFebId)
  const awayTotalPoints = awayScores.reduce((acc, curr) => acc + curr.awayScore, 0)
  const awayPoints = (awayTotalPoints / awayScores.length).toFixed(0)

  return {
    winOrLost: localPoints > awayPoints ? props.local.prettyName : props.away.prettyName,
    result: `${localPoints} - ${awayPoints}`,
    label: 'Como local',
  }
}

const props = defineProps<Props>()
const scores = computed(() => ({
  local: {
    byTotal: {
      winOrLost:
        props.local.teamStats.points > props.away.teamStats.points
          ? props.local.prettyName
          : props.away.prettyName,
      result: `${props.local.teamStats.points.toFixed(0)} - ${props.away.teamStats.points.toFixed(0)}`,
      label: 'Según totales',
    },
    byLocal: byLocal(),
    byLast: (() => {
      const scores = props.local.scores.slice(0, 3)
      const myTotalPoints = scores.reduce((acc, curr) => {
        const score =
          curr.localTeamFebId === props.local.teamFebId ? curr.localScore : curr.awayScore
        return acc + score
      }, 0)
      const myPoints = (myTotalPoints / scores.length).toFixed(0)
      const opponentTotalPoints = scores.reduce((acc, curr) => {
        const score =
          curr.localTeamFebId === props.local.teamFebId ? curr.awayScore : curr.localScore
        return acc + score
      }, 0)
      const opponentPoints = (opponentTotalPoints / scores.length).toFixed(0)

      return {
        winOrLost: myPoints > opponentPoints ? props.local.prettyName : props.away.prettyName,
        result: `${myPoints} - ${opponentPoints}`,
        label: 'Últimos 3 partidos',
      }
    })(),
    byWin: (() => {
      const scores = props.local.scores.filter((score) => {
        const isLocal = score.localTeamFebId === props.local.teamFebId
        const myScore = isLocal ? score.localScore : score.awayScore
        const otherScore = isLocal ? score.awayScore : score.localScore
        return myScore > otherScore
      })
      const myTotalPoints = scores.reduce((acc, curr) => {
        const score =
          curr.localTeamFebId === props.local.teamFebId ? curr.localScore : curr.awayScore
        return acc + score
      }, 0)
      const myPoints = (myTotalPoints / scores.length).toFixed(0)
      const opponentTotalPoints = scores.reduce((acc, curr) => {
        const score =
          curr.localTeamFebId === props.local.teamFebId ? curr.awayScore : curr.localScore
        return acc + score
      }, 0)
      const opponentPoints = (opponentTotalPoints / scores.length).toFixed(0)
      return {
        winOrLost: myPoints > opponentPoints ? props.local.prettyName : props.away.prettyName,
        result: `${myPoints} - ${opponentPoints}`,
        label: 'Cuando gana',
      }
    })(),
    byLost: (() => {
      const scores = props.local.scores.filter((score) => {
        const isLocal = score.localTeamFebId === props.local.teamFebId
        const myScore = isLocal ? score.localScore : score.awayScore
        const otherScore = isLocal ? score.awayScore : score.localScore
        return myScore < otherScore
      })
      const myTotalPoints = scores.reduce((acc, curr) => {
        const score =
          curr.localTeamFebId === props.local.teamFebId ? curr.localScore : curr.awayScore
        return acc + score
      }, 0)
      const myPoints = (myTotalPoints / scores.length).toFixed(0)
      const opponentTotalPoints = scores.reduce((acc, curr) => {
        const score =
          curr.localTeamFebId === props.local.teamFebId ? curr.awayScore : curr.localScore
        return acc + score
      }, 0)
      const opponentPoints = (opponentTotalPoints / scores.length).toFixed(0)
      return {
        winOrLost: myPoints > opponentPoints ? props.local.prettyName : props.away.prettyName,
        result: `${myPoints} - ${opponentPoints}`,
        label: 'Cuando pierde',
      }
    })(),
  },
}))
</script>

<template>
  <div>PRONÓSTICOS</div>
  <div class="grid grid-cols-2 gap-8">
    <div v-for="(score, index) in scores" :key="index">
      <table class="w-full text-center">
        <thead class="bg-cyan-100 font-title">
          <tr>
            <th scope="col" class="text-center" colspan="4">NOMBRE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in score" :key="item.label">
            <td scope="col">
              {{ item.winOrLost }}
            </td>
            <td scope="col">{{ item.label }}</td>
            <td scope="col">{{ item.result }}</td>
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
