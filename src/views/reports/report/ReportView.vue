<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import TeamTableReport from './TeamTableReport.vue'
import ScoresReport from './ScoresReport.vue'
import type { GameTeamStats, TeamView } from '@/types/teams'
import { Network } from '@/api/network'
import RankingReport from './RankingReport.vue'
import PlayersTableReport from './PlayersTableReport.vue'

interface Props {
  localId: string
  awayId: string
  show: boolean
}

const props = defineProps<Props>()

const isLoading = ref(false)
const hasErrors = ref(false)

const local = ref<TeamView>()
const away = ref<TeamView>()
const league = ref<GameTeamStats>()

const getLocalTeam = async () => {
  const { data } = await Network.get<TeamView>(`teams/${props.localId}`)
  local.value = data
}
const getAwayTeam = async () => {
  const { data } = await Network.get<TeamView>(`teams/${props.awayId}`)
  away.value = data
}
const getLeague = async () => {
  const { data } = await Network.get<GameTeamStats>(`team-stats`)
  league.value = data
}

const loadTeams = async () => {
  isLoading.value = true
  hasErrors.value = false

  await Promise.all([getLocalTeam(), getAwayTeam(), getLeague()])

  if (!local.value || !away.value || !league.value) hasErrors.value = true
  isLoading.value = false
}

// const textarea = ref()

onMounted(loadTeams)
</script>

<template>
  <div v-if="isLoading">Cargando...</div>
  <div v-if="!isLoading && hasErrors">Error al cargar algún equipo</div>

  <div
    v-if="!isLoading && !hasErrors && local && away && league"
    class="w-full px-4 flex flex-col gap-8"
  >
    <TeamTableReport :local="local" :away="away" :league="league" />
    <!-- <textarea
      v-if="show"
      v-model="textarea"
      name=""
      id=""
      class="outline-0 border border-gray-300 w-full min-h-40 p-4 bg-white-pure"
    />
    <h1 class="font-bold text-2xl">COMENTARIOS DE MINION 😵‍💫</h1>
    <div v-if="!show" class="bg-white-pure border p-8">
      <div>{{ textarea }}</div>
    </div> -->
    <ScoresReport :local="local" :away="away" />
    <RankingReport :local="local" :away="away" />
    <PlayersTableReport :local="local" :away="away" />
  </div>
</template>
