<script setup lang="ts">
import router from "@/router";
import Layout from "@/layout/Layout.vue";
</script>
<template>
  <Layout/>
  <v-container class="fill-height">
    <v-responsive class="fill-height align-center text-center">
      <v-img
        height="200"
        src="@/assets/logo.svg"
      />
      <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
      <h1 class="text-h2 font-weight-bold">Uromy</h1>
      <div class="mt-5">
        <p>Uromy is created to make your study more productive</p>
        <p>It automates some aspects of <a target="_blank" href="https://en.wikipedia.org/wiki/Spaced_repetition">Spaced Repetition technique</a>,</p>
        <p>So You can concentrate on material, while Uromy makes routine part</p>
      </div>
      <v-btn
        class="mt-5"
        @click="router.push({ name: 'local-main' })"
      >Get started</v-btn>
    </v-responsive>
  </v-container>
</template>
