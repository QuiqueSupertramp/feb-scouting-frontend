<script lang="ts" setup>
interface Props {
  label: string
  local?: string | number
  away?: string | number
  percentage?: boolean
  noBorder?: boolean
}

defineProps<Props>()
</script>
<template>
  <tr class="border-b" :class="noBorder ? 'border-transparent' : 'border-white'">
    <th class="pl-4 pr-4 py-3 w-1/2 font-light">{{ label }}</th>
    <td class="py-3 w-1/4 text-center bg-cyan-100 font-semibold">
      {{ local }}
      <span v-if="percentage">%</span>
    </td>
    <td class="py-3 w-1/4 text-center bg-cyan-300">
      {{ away ?? '-' }}
      <span v-if="away && percentage">%</span>
    </td>
  </tr>
</template>
