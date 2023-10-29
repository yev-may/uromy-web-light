<script setup lang="ts">
import ViewTemplate from "@/views/ViewTemplate.vue";
import BackButton from "@/components/struct/BackButton.vue";
import BoxForm from "@/components/box/BoxForm.vue";
import { useRoute } from "vue-router";
import boxDao from "@/core/dao/boxDao";

const route = useRoute();
const box: Box = boxDao.getBox(route.params.boxId as string)
</script>

<template>
  <ViewTemplate>
    <template v-slot:mid-section>
      <h2 class="text-center mb-3">Edit box</h2>
      <BoxForm
        :box-id="box.id"
        :box-form-template="box"
        buttonText="Save"
      />
    </template>
    <template v-slot:bot-section>
      <BackButton/>
    </template>
  </ViewTemplate>
</template>
