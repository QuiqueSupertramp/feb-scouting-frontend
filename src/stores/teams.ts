import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Team } from '@/types/teams'
import { Network } from '@/api/network'
import { useLoader } from '@/composables/useLoader'

export const useTeamsStore = defineStore('teams', () => {
  const { open, close } = useLoader()

  const teams = ref<Team[]>([])
  const isLoading = ref(false)

  const loadTeams = async () => {
    open()
    isLoading.value = true

    const { data, error } = await Network.get<Team[]>('teams')

    teams.value = error ? [] : data
    isLoading.value = false
    close()
  }

  const getTeam = (teamFebId: string) => {
    return teams.value.find((t) => t.febId === teamFebId)
  }

  return { teams, isLoading, getTeam, loadTeams }
})
