<template>
  <v-btn class="w-100"
    @click="router.go(-1)"
    text="Back"
  />
</template>

<script setup lang="ts">
import router from "@/router";
</script>
