<script lang="ts" setup>
import { ref } from 'vue'
import type { SlideMenuItem } from './types'

defineProps<SlideMenuItem>()

const button = ref()

const onClick = () => {
  button.value.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' })
}
</script>

<template>
  <div @click="onClick" ref="button" class="px-2 py-1 title uppercase snap-center cursor-pointer">
    <RouterLink :to="to">
      {{ label }}
    </RouterLink>
  </div>
</template>

<style scoped>
a.router-link-exact-active {
  color: var(--color-orange-500);
}

a.router-link-exact-active:hover {
  background-color: transparent;
  cursor: default;
}

a {
  border-bottom: 2px solid transparent;
}
</style>
