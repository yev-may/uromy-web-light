<script setup lang="ts">
import ViewTemplate from "@/views/ViewTemplate.vue";
import router from "@/router";
</script>

<template>
  <ViewTemplate>
    <template v-slot:mid-section>
      <v-btn
        class="w-100"
        text="Study"
        @click="router.push({ name: 'study-card' })"
      />
      <v-btn
        class="w-100 mt-5"
        text="Material"
        @click="router.push({ name: 'boxes' })"
      />
    </template>
  </ViewTemplate>
</template>
