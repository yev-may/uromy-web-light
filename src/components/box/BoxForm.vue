<script setup lang="ts">
import { reactive } from "vue"
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import '@vueup/vue-quill/dist/vue-quill.bubble.css'
import boxDao from "@/core/dao/boxDao";
import router from "@/router";

const props = defineProps<{
  boxId?: string,
  boxFormTemplate: Box | NewBoxForm,
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

const submitFunction = () => {
  props.boxId
    ? updateBox(boxForm as Box)
    : createBox(boxForm as Box)
}

function updateBox(box: Box): void {
  boxDao.updateBox(box)
  router.go(-1)
}

function createBox(box: Box): void {
  boxDao.createBox(box)
  router.go(0)
}

const boxForm = reactive<Box | NewBoxForm>(props.boxFormTemplate)
</script>

<template>
  <v-form>
    <QuillEditor
      :options="options"
      v-model:content="boxForm.title"
      contentType="html"
      placeholder="Title"
    />
    <div class="mt-3">
      <v-btn
        class="w-100"
        :text="buttonText"
        @click="submitFunction"
      />
    </div>
  </v-form>
</template>
