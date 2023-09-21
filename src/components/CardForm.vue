<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import '@vueup/vue-quill/dist/vue-quill.bubble.css';

defineProps<{
  cardForm: Card,
  submitFunction: Function,
  buttonText: string
}>()
</script>

<template>
  <v-form>
    <div>
      <QuillEditor
        toolbar="minimal"
        v-model:content="cardForm.question"
        contentType="html"
        placeholder="Question"
      />
    </div>
    <div class="mt-3">
      <QuillEditor
        toolbar="minimal"
        v-model:content="cardForm.answer"
        contentType="html"
        placeholder="Answer"
      />
    </div>
    <div class="mt-3">
      <v-btn
        class="w-100"
        :text="buttonText"
        @click="submitFunction(cardForm)"
      />
    </div>
  </v-form>
</template>
