<script lang="ts" setup>
import SlideMenuItem from './SlideMenuItem.vue'
import type { SlideMenu } from './types'

interface Props {
  menu: SlideMenu
}

defineProps<Props>()
</script>

<template>
  <div class="shadow-2xl flex justify-center h-full w-full bg-white-pure">
    <nav class="flex items-center gap-4 overflow-x-auto no-scrollbar px-8 pt-1 h-full">
      <SlideMenuItem v-for="item in menu" :key="item.label" :to="item.to" :label="item.label" />
    </nav>
  </div>
</template>
