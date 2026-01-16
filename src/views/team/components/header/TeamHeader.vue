<script lang="ts" setup>
import type { TeamView } from '@/types/teams'
import TeamBanner from './TeamBanner.vue'
import TeamMenu from './TeamMenu.vue'

defineProps<{ team: TeamView }>()
</script>

<template>
  <TeamMenu />
  <TeamBanner :team="team" />
</template>
