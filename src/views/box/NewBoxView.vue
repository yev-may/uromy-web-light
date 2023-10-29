<script setup lang="ts">
import ViewTemplate from "@/views/ViewTemplate.vue";
import BackButton from "@/components/struct/BackButton.vue";
import BoxForm from "@/components/box/BoxForm.vue";
</script>

<template>
  <ViewTemplate>
    <template v-slot:mid-section>
      <h2 class="text-center mb-3">New box</h2>
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
