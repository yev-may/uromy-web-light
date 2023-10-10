<script setup lang="ts">
import Logo from "@/layout/Logo.vue"
import Navigation from "@/layout/Navigation.vue";
</script>

<template>
  <v-app-bar class="header-container" :elevation="1" >
    <v-container>
      <v-row class="justify-center">
        <v-col cols="6" sm="3" md="2">
          <Logo />
        </v-col>
        <v-col cols="6" sm="3" md="2">
          <Navigation/>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
