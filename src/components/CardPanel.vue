<script setup lang="ts">
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { clearHtmlTags } from "@/core/service/htmlService"
import router from "@/router"

defineProps<{
  card: Card,
  deleteFunction: Function,
}>()

const PREVIEW_LENGTH: number = 15
const formatPreview = (question: string):string => {
  return question.length <= PREVIEW_LENGTH
    ? question : question.slice(0, PREVIEW_LENGTH - 3) + '...'
}
</script>

<template>
  <v-sheet
    class="card-panel ql-editor d-flex justify-space-between mb-3"
    color="grey-lighten-3"
    border
    rounded
  >
    <div class="d-flex align-center">
      {{ formatPreview(clearHtmlTags(card.question)) }}
    </div>
    <div>
      <v-btn class="mr-3" @click="router.push({ name: 'edit-card', params: { 'card': card.id }})">Edit</v-btn>
      <v-btn @click="deleteFunction">Delete</v-btn>
    </div>
  </v-sheet>
</template>
