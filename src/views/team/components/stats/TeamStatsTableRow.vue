<script lang="ts" setup>
interface Props {
  label: string
  local?: number
  away?: number
  league?: number
  percentage?: boolean
  noBorder?: boolean
  better: boolean | null
}

const props = defineProps<Props>()

const getLocal = () => {
  if (!props.local) return '-'
  return props.percentage ? `${props.local}%` : props.local
}
const getAway = () => {
  if (!props.away) return '-'
  return props.percentage ? `${props.away}%` : props.away
}

const isLocalBetter = () => {
  if (!props.local || props.better === null) return false
  const local = props.local ?? 0
  const league = props.league ?? 0
  return props.better ? local > league : local < league
}
const isAwayBetter = () => {
  if (!props.away || props.better === null) return false
  const away = props.away ?? 0
  const league = props.league ?? 0
  return props.better ? away > league : away < league
}
</script>
<template>
  <tr class="border-b" :class="noBorder ? 'border-transparent' : 'border-white'">
    <th class="pl-4 pr-4 py-3 w-1/4 font-light">{{ label }}</th>
    <td class="py-3 w-1/4 text-center border-l border-white font-light bg-cyan-100">
      {{ league ?? '-' }}
      <span v-if="league && percentage">%</span>
    </td>
    <td class="py-3 w-1/4 text-center" :class="{ 'bg-green-100 font-semibold': isLocalBetter() }">
      <span>{{ getLocal() }}</span>
    </td>
    <td
      class="py-3 w-1/4 text-center border-l border-white"
      :class="{ 'bg-green-100 font-semibold': isAwayBetter() }"
    >
      {{ getAway() }}
    </td>
  </tr>
</template>
