<script setup lang="ts">
import ViewContainer from '@/views/ViewContainer.vue'
import DialogWindow from '@/components/struct/DialogWindow.vue'
import CardSide from '@/components/card/CardSide.vue'
import Preview from '@/components/struct/Preview.vue'
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
  <v-dialog v-model="isDialogDisplayed">
    <ViewContainer>
      <DialogWindow>
        <template v-slot:text>
          Are you sure you want to delete this card?
          <CardSide
            :content="card.question"
          />
        </template>
        <template v-slot:actions>
          <v-btn @click="isDialogDisplayed = false">No</v-btn>
          <v-btn @click="deleteFunction">Yes</v-btn>
        </template>
      </DialogWindow>
    </ViewContainer>
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
