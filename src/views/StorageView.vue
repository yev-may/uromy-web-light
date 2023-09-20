<script setup lang="ts">
import StorageStatus from "@/components/StorageStatus.vue";
import BackButton from "@/components/BackButton.vue";
</script>

<template>
  <div class="h-100 w-100 d-flex flex-column justify-space-between">
    <div class="h-100 w-100 d-flex flex-column justify-center">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <StorageStatus />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="w-100">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <BackButton />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
