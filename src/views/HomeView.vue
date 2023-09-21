<script setup lang="ts">
import router from "@/router";
</script>
<template>
  <v-container class="fill-height">
    <v-responsive class="fill-height align-center text-center">
      <v-img
        height="300"
        src="@/assets/logo.svg"
      />
      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
      <h1 class="text-h2 font-weight-bold">Uromy</h1>
      <v-btn
        class="mt-5"
        @click="router.push({ name: 'study' })"
      >Get started</v-btn>
    </v-responsive>
  </v-container>
</template>
