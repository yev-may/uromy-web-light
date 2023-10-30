<template>
  <v-card>
    <v-card-text>
      <slot name="text"/>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <slot name="actions"/>
    </v-card-actions>
  </v-card>
</template>
