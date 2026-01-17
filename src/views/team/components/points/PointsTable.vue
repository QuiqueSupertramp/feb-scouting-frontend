<script lang="ts" setup>
import type { Points } from '@/types/teams'
import PointsRow from './PointsRow.vue'

interface Props {
  points: Points
  title: string
  teamId: string
  name: string
  reverse?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="relative bg-white-pure w-full mt-16 rounded-lg rounded-tl-none">
    <div
      class="border-b border-gray-100 absolute bg-white-pure text-white h-8 w-1/2 -top-8 rounded-t-lg flex pl-4 items-center"
    >
      <span class="title">{{ title }}</span>
    </div>

    <div class="p-4 flex flex-col gap-2 w-full">
      <PointsRow
        :class="reverse ? 'order-3' : 'order-1'"
        :points="points.points"
        :quarters="points.quarters"
        :team-id="teamId"
        :name="name"
      />
      <div class="h-px w-full bg-gray-200 order-2"></div>
      <PointsRow
        :class="reverse ? 'order-1' : 'order-3'"
        :points="points.pointsAgainst"
        :quarters="points.quartersAgainst"
        :name="name"
      />
    </div>
  </div>
</template>
