<script lang="ts" setup>
import { useTeamsStore } from '@/stores/teams'
import { computed, ref } from 'vue'
import ReportView from './report/ReportView.vue'

const teamsStore = useTeamsStore()

const localTeamsOptions = computed(() => {
  return teamsStore.teams.filter((t) => t.febId !== awayTeam.value)
})
const awayTeamsOptions = computed(() => {
  return teamsStore.teams.filter((t) => t.febId !== localTeam.value)
})

const localTeam = ref('0')
const awayTeam = ref('0')

const show = ref(true)
</script>

<template>
  <div class="mb-4">
    <RouterLink v-if="show" :to="{ name: 'teams' }" class="bg-cyan-900 text-white px-6 py-2"
      >VER EQUIPOS</RouterLink
    >
  </div>
  <div class="flex gap-8" v-if="show">
    <select
      v-model="localTeam"
      class="outline-0 shadow-xl border border-gray-200 rounded-lg px-2 py-3 bg-white-pure"
    >
      <option :value="0">Seleccionar</option>
      <option v-for="team in localTeamsOptions" :key="team.febId" :value="team.febId">
        {{ team.name }}
      </option>
    </select>
    <select
      v-model="awayTeam"
      class="outline-0 shadow-xl border border-gray-200 rounded-lg px-2 py-3 bg-white-pure"
    >
      <option :value="0">Seleccionar</option>
      <option v-for="team in awayTeamsOptions" :key="team.febId" :value="team.febId">
        {{ team.name }}
      </option>
    </select>
  </div>

  <div class="my-10">
    <button @click="show = !show" class="font-bold text-2xl">SCOUTING</button>
  </div>

  <div v-if="localTeam !== '0' && awayTeam !== '0'" class="mb-20">
    <ReportView :localId="localTeam" :awayId="awayTeam" :show="show" />
  </div>
</template>
