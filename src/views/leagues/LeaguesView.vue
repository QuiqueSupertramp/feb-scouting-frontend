<script lang="ts" setup>
import { Network } from '@/api/network'
import { onMounted, ref } from 'vue'
import { useTeamsStore } from '@/stores/teams'
import { useLoader } from '@/composables/useLoader'

interface StandingRow {
  teamFebId: string
  played: number
  wins: number
  losses: number
  pointsFor: number
  pointsAgainst: number
  name: string
}

const { open, close } = useLoader()
const store = useTeamsStore()

const league = ref<StandingRow[]>()
const hasError = ref(false)
const isLoading = ref(false)

const loadLeague = async () => {
  open()
  isLoading.value = true

  await store.loadTeams()

  const { data, error } = await Network.get<StandingRow[]>('scores/classification')

  hasError.value = !!error
  league.value = error
    ? undefined
    : data.map((d) => ({ ...d, name: store.getTeam(d.teamFebId)?.prettyName ?? '-' }))
  isLoading.value = false
  close()
}

onMounted(loadLeague)
</script>

<template>
  <div v-if="!isLoading && hasError">Ha habido un error al cargar la liga</div>

  <div v-if="!isLoading && !hasError && league" class="my-10 px-8">
    <div class="flex justify-center items-center">
      <img src="/src/assets/images/FebLogoHorizontal.webp" class="h-16 mb-4" />
    </div>
    <div class="mx-auto max-w-150 shadow-2xl bg-white-pure rounded-lg overflow-hidden">
      <table class="text-left w-full">
        <tbody>
          <tr class="border-b border-gray-100 bg-cyan-800">
            <td class="pl-3 py-3 text-white-pure font-semibold" colspan="2">CLASIFICACIÓN</td>
            <td class="py-3 px-1 text-white-pure font-semibold text-center">PG</td>
            <td class="py-3 px-1 text-white-pure font-semibold text-center">PP</td>
            <td class="py-3 px-3 text-white-pure font-semibold text-center">PF</td>
            <td class="py-3 px-3 text-white-pure font-semibold text-center">PC</td>
          </tr>

          <tr
            v-for="(team, index) in league"
            :key="team.teamFebId"
            :class="{
              'border-b border-white': index !== league.length - 1,
              'bg-green-100 border-white-pure': index < 4,
              'bg-cyan-100 border-white-pure': index > 10,
            }"
          >
            <th class="pl-3 pr-1 py-3 font-normal">{{ index + 1 }}</th>
            <th class="pr-1 py-3 font-normal underline text-blue-600">
              <RouterLink :to="{ name: 'teamStats', params: { id: team.teamFebId } }">
                {{ team.name }}
              </RouterLink>
            </th>
            <td class="text-center font-light">{{ team.wins }}</td>
            <td class="text-center font-light">{{ team.losses }}</td>
            <td class="text-center font-light">{{ team.pointsFor }}</td>
            <td class="text-center font-light">{{ team.pointsAgainst }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
