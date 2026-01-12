<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Network } from '@/api/network'
import TeamHeader from './components/header/TeamHeader.vue'
import type { TeamView } from '@/types/teams'

const route = useRoute()
const team = ref<TeamView>()
const hasError = ref(false)
const isLoading = ref(false)

const loadTeam = async () => {
  isLoading.value = true

  const { data, error } = await Network.get<TeamView>(`teams/${route.params.id}`)

  hasError.value = !!error
  team.value = error ? undefined : data
  isLoading.value = false
}

onMounted(loadTeam)
</script>

<template>
  <div v-if="isLoading">Cargando...</div>
  <div v-if="!isLoading && hasError">Cargando...</div>
  <template v-if="!isLoading && !hasError && team">
    <TeamHeader :team="team" />
    <RouterView :team="team" />
  </template>
</template>
