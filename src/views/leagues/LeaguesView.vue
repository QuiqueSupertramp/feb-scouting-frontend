<script lang="ts" setup>
import LeaguesMenu from './components/header/LeaguesMenu.vue'
</script>

<template>
  <div class="absolute w-full h-12">
    <LeaguesMenu />
  </div>
  <div class="pt-12">
    <RouterView />
  </div>
</template>
