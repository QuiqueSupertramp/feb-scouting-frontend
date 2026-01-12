<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import IconCommunity from '@/components/icons/IconCommunity.vue'

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
    icon: IconCommunity,
  },
  {
    id: CurrentView.LEAGUES,
    link: '/teams',
    label: 'Ligas',
    icon: IconCommunity,
  },
  {
    id: CurrentView.REPORTS,
    link: '/reports',
    label: 'Informes',
    icon: IconCommunity,
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
      class="pb-4 pt-6"
    >
      <div class="flex flex-col items-center justify-center gap-2">
        <component
          :is="item.icon"
          :size="16"
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
