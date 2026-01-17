<script lang="ts" setup>
import PointsTable from './PointsTable.vue'
import type { PointsStats } from '@/types/teams'

defineProps<{ points: PointsStats; febId: string; name: string }>()
</script>

<template>
  <div class="mx-auto w-full max-w-100 my-20">
    <PointsTable :name="name" :points="points.total" :team-id="febId" title="Total" />
    <PointsTable :name="name" :points="points.local" :team-id="febId" title="Como Local" />
    <PointsTable :name="name" :points="points.away" :team-id="febId" title="Como Visitante" />
  </div>
</template>
