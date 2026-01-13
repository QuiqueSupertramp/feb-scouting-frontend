<script lang="ts" setup>
import { useLoader } from '@/composables/useLoader'

const { isVisible } = useLoader()
</script>

<template>
  <div
    v-if="isVisible"
    class="absolute w-svw h-svh bg-gray-900/90 flex flex-col gap-4 justify-center items-center pb-20"
  >
    <div>
      <img src="/src/assets/images/FebLogo.png" class="rounded-full animate-pulse" width="300" />
    </div>
    <div class="text-center text-2xl animate-pulse text-white">Cargando...</div>
  </div>
</template>
