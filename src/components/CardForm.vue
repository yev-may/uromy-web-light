<script setup lang="ts">
const props = defineProps<{
  cardForm: Card,
  submitFunction: Function,
  buttonText: string
}>()
</script>

<template>
  <v-form>
    <v-textarea
      label="Question"
      v-model="cardForm.question"
      rows="1"
      auto-grow
      disabled
    />
    <v-textarea
      label="Answer"
      v-model="cardForm.answer"
      rows="1"
      auto-grow
    />
    <v-btn class="w-100"
      :text="buttonText"
      @click="submitFunction(cardForm)"
    />
  </v-form>
</template>
