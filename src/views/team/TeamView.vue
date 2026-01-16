<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import TeamHeader from './components/header/TeamHeader.vue'
import type { TeamView } from '@/types/teams'
import { useLoader } from '@/composables/useLoader'
import { TeamService } from '@/api/teamService'

const route = useRoute()
const { open, close } = useLoader()
const team = ref<TeamView>()
const hasError = ref(false)
const isLoading = ref(false)

const loadTeam = async () => {
  open()
  isLoading.value = true

  const { data, error } = await TeamService.getTeam(route.params.id as string)

  hasError.value = !!error
  team.value = error ? undefined : data
  isLoading.value = false
  close()
}

onMounted(loadTeam)
</script>

<template>
  <div v-if="!isLoading && hasError">Ha habido un error al cargar el equipo</div>
  <template v-if="!isLoading && !hasError && team">
    <TeamHeader :team="team" />
    <RouterView :team="team" />
  </template>
</template>
