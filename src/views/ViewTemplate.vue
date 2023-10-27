<template>
  <div class="h-100 w-100 d-flex flex-column justify-space-between">
    <div class="w-100">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <slot name="top-section" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="h-100 w-100 d-flex flex-column justify-center">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <slot name="mid-section" />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="w-100">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <slot name="bot-section" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
