<script lang="ts" setup>
import { ref } from 'vue'
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router'

interface Props {
  to: RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
  label: string
}

defineProps<Props>()

const button = ref()

const onClick = () => {
  button.value.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' })
}
</script>

<template>
  <div @click="onClick" ref="button" class="px-4 py-1 title uppercase snap-center cursor-pointer">
    <RouterLink :to="to">
      {{ label }}
    </RouterLink>
  </div>
</template>

<style scoped>
a.router-link-exact-active {
  color: var(--color-orange-500);
  border-bottom: 2px solid var(--color-orange-500);
}

a.router-link-exact-active:hover {
  background-color: transparent;
  cursor: default;
}

a {
  /* display: inline-block; */
  border-bottom: 2px solid transparent;
}

/* nav a:first-of-type {
  border: 0;
} */
</style>
