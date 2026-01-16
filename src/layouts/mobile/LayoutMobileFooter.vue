<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import IconTeam from '@/components/icons/IconTeam.vue'
import IconBasketball from '@/components/icons/IconBasketball.vue'
import IconBook from '@/components/icons/IconBook.vue'

const menu = [
  {
    id: 1,
    link: '/teams',
    label: 'Equipos',
    icon: IconTeam,
    disabled: false,
  },
  {
    id: 2,
    link: '/leagues',
    label: 'Ligas',
    icon: IconBasketball,
    disabled: false,
  },
  {
    id: 3,
    link: '/reports',
    label: 'Informes',
    icon: IconBook,
    disabled: false,
  },
]
</script>

<template>
  <footer class="bg-cyan-900 text-white grid grid-cols-3">
    <RouterLink
      v-for="item in menu"
      :key="item.id"
      :to="item.link"
      class="pb-3 pt-4"
      :class="{ disabled: item.disabled }"
    >
      <div class="flex flex-col items-center justify-center gap-1">
        <component :is="item.icon" :size="24" />
        <span class="uppercase font-semibold">{{ item.label }}</span>
      </div>
    </RouterLink>
  </footer>
</template>

<style scoped>
.disabled {
  opacity: 0.5;
  pointer-events: none;
}

a {
  /* display: inline-block; */
  color: var(--color-gray-100) !important;
}

a.router-link-active {
  color: var(--color-orange) !important;
  /* border-bottom: 2px solid var(--color-orange-500); */
}

a.router-link-active:hover {
  background-color: transparent;
  cursor: default;
}

/* nav a:first-of-type {
  border: 0;
} */
</style>
