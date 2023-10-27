<script setup lang="ts">
import ViewTemplate from "@/views/ViewTemplate.vue";
import BackButton from "@/components/BackButton.vue";
import BoxForm from "@/components/BoxForm.vue";
</script>

<template>
  <ViewTemplate>
    <template v-slot:mid-section>
      <BoxForm
        :box-form-template="{ title: '' }"
        button-text="Create"
      />
    </template>
    <template v-slot:bot-section>
      <BackButton/>
    </template>
  </ViewTemplate>
</template>
