<script setup lang="ts">
import '@vueup/vue-quill/dist/vue-quill.snow.css'

defineProps<{ content: string }>()
</script>

<template>
  <v-sheet
    class="pa-3 mt-3"
    color="grey-lighten-3"
    border
    rounded
  >
    <div
      class="ql-editor"
      v-html="content"
    />
  </v-sheet>
</template>
