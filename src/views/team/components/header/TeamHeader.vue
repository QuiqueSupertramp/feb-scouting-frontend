<script lang="ts" setup>
import type { TeamView } from '@/types/teams'
import TeamBanner from './TeamBanner.vue'
import TeamMenu from './TeamMenu.vue'

defineProps<{ team: TeamView }>()
</script>

<template>
  <div class="absolute w-full h-12">
    <TeamMenu />
  </div>
  <div class="mt-12">
    <TeamBanner :team="team" />
  </div>
</template>
