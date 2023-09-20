<script setup lang="ts">
import router from "@/router";
</script>

<template>
  <div class="h-100 w-100 d-flex flex-column justify-center">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" sm="6" md="4">
          <v-btn class="w-100"
            text="Study"
            @click="router.push({ name: 'study-card' })"
          />
        </v-col>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="12" sm="6" md="4">
          <v-btn
            class="w-100"
            text="Add Card"
            @click="router.push({ name: 'new-card' })"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
