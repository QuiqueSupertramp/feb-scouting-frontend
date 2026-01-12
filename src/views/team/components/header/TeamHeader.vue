<script lang="ts" setup>
import type { TeamView } from '@/types/teams'
import TeamBanner from './TeamBanner.vue'
import TeamMenu from './TeamMenu.vue'

interface Props {
  team: TeamView
}

defineProps<Props>()
</script>

<template>
  <TeamMenu />
  <TeamBanner :team="team" />
</template>
