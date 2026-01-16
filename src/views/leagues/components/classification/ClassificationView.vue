<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useLoader } from '@/composables/useLoader'
import type { Classifications } from './types'
import { ScoreService } from '@/api/scoreService'

const { open, close } = useLoader()

const classifications = ref<Classifications>()
const hasError = ref(false)
const isLoading = ref(false)

const loadClassifications = async () => {
  open()
  isLoading.value = true

  const { data, error } = await ScoreService.getClassifications()

  hasError.value = !!error
  classifications.value = error ? undefined : data
  isLoading.value = false
  close()
}

const selectedLeague = ref<'total' | 'local' | 'away'>('total')
const showTotalPoints = ref(false)

onMounted(loadClassifications)
</script>

<template>
  <div v-if="!isLoading && hasError">Ha habido un error al cargar la liga</div>

  <div v-if="!isLoading && !hasError && classifications" class="my-10 px-8">
    <!-- <div class="flex justify-center items-center">
      <img src="/src/assets/images/FebLogoHorizontal.webp" class="h-16 mb-4" />
    </div> -->
    <div class="mx-auto max-w-150 grid grid-cols-3 gap-2 mb-6">
      <button
        @click="selectedLeague = 'total'"
        class="bg-white-pure rounded-full shadow-2xl font-semibold text-cyan-800 px-6 py-2"
        :class="{ 'bg-orange!': selectedLeague === 'total' }"
      >
        Total
      </button>
      <button
        @click="selectedLeague = 'local'"
        class="bg-white-pure rounded-full shadow-2xl font-semibold text-cyan-800 px-6 py-2"
        :class="{ 'bg-orange!': selectedLeague === 'local' }"
      >
        Local
      </button>
      <button
        @click="selectedLeague = 'away'"
        class="bg-white-pure rounded-full shadow-2xl font-semibold text-cyan-800 px-6 py-2"
        :class="{ 'bg-orange!': selectedLeague === 'away' }"
      >
        Visitante
      </button>
    </div>
    <div class="mx-auto max-w-150 mb-2">
      <label class="flex flex-row-reverse items-center gap-2 cursor-pointer">
        <input v-model="showTotalPoints" type="checkbox" class="sr-only peer" />
        <div
          class="relative w-7 h-4 bg-gray-300 after:bg-white-pure rounded-full peer peer-checked:after:-translate-x-full rtl:peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0 after:start-3.5 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-800 peer-checked:after:bg-white-pure"
        ></div>
        <span class="text-xs font-light">Puntos Totales</span>
      </label>
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
            v-for="(team, index) in classifications[selectedLeague]"
            :key="team.teamFebId"
            :class="{
              'border-b border-white': index !== classifications.total.length - 1,
              'bg-green-100 border-white-pure': index < 4,
              'bg-cyan-100 border-white-pure': index > 10,
            }"
          >
            <th class="pl-3 pr-1 py-3 font-normal">{{ index + 1 }}</th>
            <th class="pr-1 py-3 font-normal underline text-blue-600">
              <RouterLink :to="{ name: 'teamStats', params: { id: team.teamFebId } }">
                {{ team.prettyName }}
              </RouterLink>
            </th>
            <td class="text-center font-light">{{ team.wins }}</td>
            <td class="text-center font-light">{{ team.losses }}</td>
            <td class="text-center font-light">
              {{ !showTotalPoints ? Math.round(team.points / team.games) : team.points }}
            </td>
            <td class="text-center font-light">
              {{
                !showTotalPoints ? Math.round(team.pointsAgainst / team.games) : team.pointsAgainst
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
