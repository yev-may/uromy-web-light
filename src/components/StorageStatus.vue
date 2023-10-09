<script setup lang="ts">
import { getStorageSizeKB } from "@/core/service/storageStateService"

const storageSizeKB = getStorageSizeKB()
const sizePercent = storageSizeKB / 5
const sizePercentMessage = sizePercent.toFixed(2) + ' %'
const sizeMessage = storageSizeKB + ' KB / 5120 KB'
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
