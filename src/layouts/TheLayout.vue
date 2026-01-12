<script setup lang="ts">
import { useRoute } from 'vue-router'
import LayoutMobile from './mobile/LayoutMobile.vue'
import { computed, type Component } from 'vue'
import { LAYOUTS } from './types'
import LayoutEmpty from './empty/LayoutEmpty.vue'

const route = useRoute()
const currentLayout = computed(() => (route.meta?.layout as LAYOUTS) ?? LAYOUTS.MOBILE)

const layoutComponent: Record<LAYOUTS, Component> = {
  [LAYOUTS.MOBILE]: LayoutMobile,
  [LAYOUTS.EMPTY]: LayoutEmpty,
}
</script>

<template>
  <component :is="layoutComponent[currentLayout]" />
</template>
