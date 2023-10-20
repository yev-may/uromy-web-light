<script setup lang="ts">
import { ref } from "vue";
import boxDao from "@/core/dao/boxDao";
import BoxPanel from "@/components/BoxPanel.vue";
import router from "@/router";
import BoxForm from "@/components/BoxForm.vue";

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
      text="+"
      @click="router.push({ name: 'new-box' })"
    />
  </div>
</template>
