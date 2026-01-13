<script setup lang="ts">
import { onMounted } from 'vue'
import LoaderFull from './components/LoaderFull.vue'
import TheLayout from './layouts/TheLayout.vue'
import { useTeamsStore } from './stores/teams'

const store = useTeamsStore()

onMounted(store.loadTeams)
</script>

<template>
  <LoaderFull />
  <TheLayout />
</template>
