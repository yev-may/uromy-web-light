<script setup lang="ts">
defineProps<{ box: Box }>()
</script>

<template>
  <v-card>
    <v-card-text class="ql-editor">
      <div
        v-html="box.title"
      />
    </v-card-text>
  </v-card>
</template>
