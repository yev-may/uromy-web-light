<script setup lang="ts">
import CardSide from '@/components/CardSide.vue'
import Preview from '@/components/Preview.vue'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import router from '@/router'

defineProps<{
  card: Card,
  deleteFunction: Function,
}>()

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
        @click="deleteFunction"
      />
      <v-btn
        class="mt-3 mr-3 ma-0"
        icon="mdi-cog-outline"
        density="comfortable"
        @click="router.push({ name: 'edit-card', params: { 'card': card.id }})"
      />
    </div>
  </Preview>
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
