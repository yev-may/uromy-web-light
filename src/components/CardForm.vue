<script setup lang="ts">

const props = defineProps<{
  cardForm: Card,
  submitFunction: Function,
  buttonText: string
}>()

</script>

<template>
  <v-form>
    <v-text-field
      label="Question"
      v-model="cardForm.question"
    />
    <v-text-field
      label="Answer"
      v-model="cardForm.answer"
    />
    <v-btn class="w-100"
      :text="buttonText"
      @click="submitFunction(cardForm)"
    />
  </v-form>
</template>
