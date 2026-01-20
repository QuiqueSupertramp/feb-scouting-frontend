<script lang="ts" setup>
import { getPlayerImage } from '@/helpers/feb'
import { ref } from 'vue'

interface Props {
  playerId: string
}

defineProps<Props>()

const error = ref(false)

const handleError = () => {
  error.value = true
}
</script>

<template>
  <div
    class="bg-white border border-gray-200 rounded-full overflow-hidden h-10 w-10 mx-auto flex justify-center items-center"
  >
    <img
      v-if="!error"
      :src="getPlayerImage(playerId)"
      @error="handleError"
      class="h-10 w-10 object-cover"
    />
    <img v-else src="/src/assets/images/user.webp" class="h-10 w-10 object-cover" />
  </div>
</template>
