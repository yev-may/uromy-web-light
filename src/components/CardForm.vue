<script setup lang="ts">
import { reactive } from "vue"
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'

const props = defineProps<{
  cardFormTemplate: Card,
  submitFunction: Function,
  buttonText: string
}>()

const options = {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'align': [] }],
    ]
  }
}

const cardForm = reactive(props.cardFormTemplate)
</script>

<template>
  <v-form>
    <div>
      <QuillEditor
        :options="options"
        v-model:content="cardForm.question"
        contentType="html"
        placeholder="Question"
      />
    </div>
    <div class="mt-3">
      <QuillEditor
        :options="options"
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
