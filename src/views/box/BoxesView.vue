<script setup lang="ts">
import ViewTemplate from "@/views/ViewTemplate.vue";
import StorageStatus from "@/components/storage/StorageStatus.vue";
import BackButton from "@/components/struct/BackButton.vue";
import BoxesPanel from "@/components/box/BoxesPanel.vue";
</script>

<template>
  <ViewTemplate>
    <template v-slot:top-section>
      <StorageStatus/>
    </template>
    <template v-slot:mid-section>
      <BoxesPanel/>
    </template>
    <template v-slot:bot-section>
      <BackButton/>
    </template>
  </ViewTemplate>
</template>
