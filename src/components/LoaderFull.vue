<script lang="ts" setup>
import { useLoader } from '@/composables/useLoader'

const { isVisible, firstTime } = useLoader()
</script>

<template>
  <div
    v-if="isVisible || firstTime"
    class="absolute z-50 w-svw h-svh bg-gray-900 flex flex-col gap-4 justify-center items-center pb-40"
  >
    <div>
      <img src="/src/assets/images/FebLogoFull.webp" class="animate-bounce" width="200" />
    </div>
    <div class="text-center text-2xl animate-pulse text-white mt-8">Cargando...</div>
  </div>
</template>
