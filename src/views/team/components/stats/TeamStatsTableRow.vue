<script lang="ts" setup>
interface Props {
  label: string
  total: number
  local: number
  away: number
  league?: number
  percentage?: boolean
  noBorder?: boolean
  better: boolean | null
}

const props = defineProps<Props>()

const getValue = (value?: number) => {
  if (!value) return '-'
  const qty = Math.round(value)
  return props.percentage ? `${qty}%` : qty
}

const isBetter = (value?: number) => {
  if (!value || props.better === null) return false
  const league = props.league ?? 0
  return props.better ? value > league * 1.1 : value < league * 0.9
}

const isWorst = (value?: number) => {
  if (!value || props.better === null) return false
  const league = props.league ?? 0
  return props.better ? value < league * 0.9 : value > league * 1.1
}
</script>
<template>
  <tr class="border-b" :class="noBorder ? 'border-transparent' : 'border-white'">
    <th class="text-center py-3 title">{{ label }}</th>

    <td class="font-light text-center border-l border-white bg-cyan-100">
      {{ getValue(league) }}
    </td>

    <td
      class="font-light text-center border-l border-white"
      :class="{
        'bg-lime-100': isBetter(total),
        'bg-red-100': isWorst(total),
      }"
    >
      <div>{{ getValue(total) }}</div>
    </td>

    <td
      class="font-light text-center border-l border-white"
      :class="{
        'bg-lime-100': isBetter(local),
        'bg-red-100!': isWorst(local),
      }"
    >
      <span>{{ getValue(local) }}</span>
    </td>
    <td
      class="font-light py-3 text-center border-l border-white"
      :class="{
        'bg-lime-100': isBetter(away),
        'bg-red-100 !': isWorst(away),
      }"
    >
      {{ getValue(away) }}
    </td>
  </tr>
</template>
