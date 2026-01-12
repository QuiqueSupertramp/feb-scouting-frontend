<script setup lang="ts">
import { useTeamsStore } from '@/stores/teams'

const store = useTeamsStore()
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <div v-if="store.isLoading" class="flex flex-col">
      <div>
        <img src="/src/assets/FebLogo.svg" class="h-80 w-80 rounded-full animate-pulse" />
      </div>
      <div class="text-center text-2xl animate-pulse">Cargando...</div>
    </div>

    <RouterLink v-else :to="{ name: 'teams' }" class="bg-orange px-6 py-2 text-6xl rounded title"
      >ENTRAR</RouterLink
    >
  </div>
</template>
