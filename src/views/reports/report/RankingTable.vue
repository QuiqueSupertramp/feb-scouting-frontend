<script lang="ts" setup>
interface Props {
  players: { name: string; value: string | number }[]
  title: string
}

defineProps<Props>()

const formatName = (name: string) => {
  const x = name.split(',').reverse().join(' ')
  const z = x
    .trim()
    .split(' ')
    .map((s) => {
      const [firstLetter, ...restOfLetters] = s
      return `${firstLetter?.toUpperCase()}${restOfLetters.join('').toLowerCase()}`
    })
    .join(' ')
  return z
}
</script>

<template>
  <div class="mx-auto w-full border border-gray-300">
    <div class="bg-white-pure overflow-hidden">
      <table class="text-left w-full">
        <tbody>
          <tr>
            <th
              class="text-center py-3 border-b border-gray-300 title bg-cyan-100 uppercase"
              colspan="2"
            >
              {{ title }}
            </th>
          </tr>
          <tr v-for="player in players" :key="player.name" class="border-b border-gray-200">
            <td class="py-3 w-2/3 pl-4 pr-2 text-balance">
              {{ formatName(player.name) }}
            </td>
            <td class="py-3 w-1/3 text-center font-semibold border-l border-gray-200 title">
              {{ player.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
