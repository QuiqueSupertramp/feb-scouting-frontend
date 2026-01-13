<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import IconTeam from '@/components/icons/IconTeam.vue'
import IconBasketball from '@/components/icons/IconBasketball.vue'
import IconBook from '@/components/icons/IconBook.vue'

enum CurrentView {
  TEAMS = 1,
  LEAGUES = 2,
  REPORTS = 3,
}

const menu = [
  {
    id: CurrentView.TEAMS,
    link: '/teams',
    label: 'Equipos',
    icon: IconTeam,
  },
  {
    id: CurrentView.LEAGUES,
    link: '/teams',
    label: 'Ligas',
    icon: IconBasketball,
    disabled: true,
  },
  {
    id: CurrentView.REPORTS,
    link: '/reports',
    label: 'Informes',
    icon: IconBook,
  },
]

const currentView = ref<CurrentView>(1)
</script>

<template>
  <footer class="bg-cyan-900 text-white grid grid-cols-3">
    <RouterLink
      v-for="item in menu"
      :key="item.id"
      :to="item.link"
      @click="currentView = item.id"
      class="pb-4 pt-5"
      :class="{ disabled: item.disabled }"
    >
      <div class="flex flex-col items-center justify-center gap-2">
        <component
          :is="item.icon"
          :size="24"
          :class="currentView === item.id ? 'text-orange!' : 'text-white!'"
        />
        <span
          class="uppercase title"
          :class="currentView === item.id ? 'text-orange!' : 'text-white!'"
          >{{ item.label }}</span
        >
      </div>
    </RouterLink>
  </footer>
</template>

<style lang="css" scoped>
.disabled {
  opacity: 0.5;
  pointer-events: none;
}
</style>
