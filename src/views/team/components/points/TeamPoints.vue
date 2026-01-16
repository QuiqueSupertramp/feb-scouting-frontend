<script lang="ts" setup>
import PointsTable from './PointsTable.vue'
import type { TeamView } from '@/types/teams'

defineProps<{ team: TeamView }>()
</script>

<template>
  <div class="mx-auto max-w-87 mb-8">
    <PointsTable :team="team.points.total" :team-id="team.febId" title="Total" />
    <PointsTable :team="team.points.local" :team-id="team.febId" title="Como Local" />
    <PointsTable :team="team.points.away" :team-id="team.febId" title="Como Visitante" />
  </div>
</template>
