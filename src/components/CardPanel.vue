<script setup lang="ts">
import CardSide from '@/components/CardSide.vue'
import Preview from '@/components/Preview.vue'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { ref } from 'vue'
import router from '@/router'

defineProps<{
  card: Card,
  deleteFunction: Function,
}>()

const isDialogDisplayed = ref(false)
</script>

<template>
  <Preview>
    <CardSide
      :content="card.question"
    />
    <div class="preview__actions">
      <v-btn
        class="mt-3 mr-3"
        icon="mdi-trash-can-outline"
        density="comfortable"
        @click="isDialogDisplayed = true"
      />
      <v-btn
        class="mt-3 mr-3 ma-0"
        icon="mdi-cog-outline"
        density="comfortable"
        @click="router.push({ name: 'edit-card', params: { 'cardId': card.key.id, 'boxId': card.key.boxId }})"
      />
    </div>
  </Preview>
  <v-dialog
    v-model="isDialogDisplayed"
    width="auto"
  >
    <v-card>
      <v-card-text>
        Are you sure you want to delete this card?
        <CardSide
          :content="card.question"
        />
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn variant="outlined" @click="isDialogDisplayed = false">No</v-btn>
        <v-btn variant="outlined" @click="deleteFunction">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style lang="css" scoped>
.preview__actions {
  display: none;
}

.preview__content:hover > .preview__actions {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
}
</style>
