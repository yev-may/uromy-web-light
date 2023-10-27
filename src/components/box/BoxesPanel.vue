<script setup lang="ts">
import BoxPanel from "@/components/box/BoxPanel.vue";
import { ref } from "vue";
import boxDao from "@/core/dao/boxDao";
import router from "@/router";

const boxes = ref<Array<Box>>(boxDao.getBoxes())
</script>

<template>
  <div>
    <BoxPanel
      class="mt-3"
      v-for="box in boxes"
      :box="box"
      @click="router.push({ name: 'box', params: {boxId: box.id } })"
    />
    <v-btn
      class="w-100 mt-3"
      text="Add Box"
      @click="router.push({ name: 'new-box' })"
    />
  </div>
</template>
