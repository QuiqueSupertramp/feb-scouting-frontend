import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Team } from '@/types/teams'
import { Network } from '@/api/network'

export const useTeamsStore = defineStore('teams', () => {
  const teams = ref<Team[]>([])
  const isLoading = ref(false)

  const loadTeams = async () => {
    isLoading.value = true

    const { data, error } = await Network.get<Team[]>('teams')

    teams.value = error ? [] : data
    isLoading.value = false
  }

  const getTeam = (teamFebId: string) => {
    return teams.value.find((t) => t.febId === teamFebId)
  }

  onMounted(loadTeams)

  return { teams, isLoading, getTeam }
})
