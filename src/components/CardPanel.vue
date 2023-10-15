<script setup lang="ts">
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import router from "@/router"
import CardSide from "@/components/CardSide.vue";

defineProps<{
  card: Card,
  deleteFunction: Function,
}>()

</script>

<template>
  <div class="card-preview">
    <div class="content">
      <CardSide
        :content="card.question"
      />
      <div class="actions">
        <v-btn class="mt-3 mr-3" @click="router.push({ name: 'edit-card', params: { 'card': card.id }})">Edit</v-btn>
        <v-btn class="mt-3 mr-3" @click="deleteFunction">Delete</v-btn>
      </div>
    </div>
    <div class="preview-hider" />
  </div>
</template>

<style scoped>
.card-preview {
  position: relative;
  max-height: 80px;
  overflow: hidden;
}

.card-preview > .content > .actions {
  display: none;
}

.card-preview:hover > .content > .actions {
  display: flex;
}

.card-preview:hover {
  max-height: none;
}

.card-preview:hover > .preview-hider {
  display: none;
}

.preview-hider {
  position: absolute;
  bottom: 0;
  z-index: 1;
  height: 20px;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, white 100%);
}

.content {
  position: relative;
}

.actions {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}
</style>
