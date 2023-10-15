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
    </div>
    <div class="preview-hider" />
  </div>
</template>

<style lang="css" scoped>
.card-preview {
  position: relative;
  max-height: 80px;
  overflow: hidden;

  .content {
    position: relative;

    .actions {
      display: none;
    }
  }

  .preview-hider {
    position: absolute;
    bottom: 0;
    z-index: 1;
    height: 20px;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, white 100%);
  }

  &:hover {
    max-height: none;

    .content {

      .actions {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
      }
    }

    .preview-hider {
      display: none;
    }
  }
}
</style>
