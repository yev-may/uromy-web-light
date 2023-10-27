<script setup lang="ts">
import { getStorageSizeKB } from "@/core/service/storageStateService"

const storageSizeKB = getStorageSizeKB()
const sizePercent = storageSizeKB / 50
const sizePercentMessage = sizePercent.toFixed(2) + ' %'
const sizeMessage = (storageSizeKB / 1024).toFixed(2) + '  / 5 MB'
</script>

<template>
  <div>
    <p>{{ sizePercentMessage }}</p>
    <v-progress-linear :model-value="sizePercent" />
    <p>{{ sizeMessage }}</p>
  </div>
</template>

<style scoped>

</style>
