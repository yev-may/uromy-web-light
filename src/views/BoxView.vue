<script setup lang="ts">
import ViewTemplate from "@/views/ViewTemplate.vue";
import BackButton from "@/components/BackButton.vue";
import CardPagePanel from "@/components/CardPagePanel.vue";
import { reactive, ref } from "vue";
import boxDao from "@/core/dao/boxDao";
import router from "@/router";
import { useRoute } from "vue-router";

const route = useRoute()

const box = reactive<Box>(boxDao.getBox(route.params.boxId as string))
const isDialogDisplayed = ref(false)

function deleteBox() {
  boxDao.deleteBox(box.id)
  router.push({name: 'boxes'})
}
</script>

<template>
  <ViewTemplate>
    <template v-slot:mid-section>
      <CardPagePanel :box="box"/>
    </template>
    <template v-slot:bot-section>
      <v-btn
        class="mt-2 mr-2"
        icon="mdi-trash-can-outline"
        density="comfortable"
        @click="isDialogDisplayed = true"
      />
      <v-btn
        class="mt-2 mr-2 ma-0"
        icon="mdi-cog-outline"
        density="comfortable"
        @click="router.push({ name: 'edit-box', params: { 'boxId': box.id }})"
      />
      <BackButton class="mt-5"/>
    </template>
  </ViewTemplate>

  <v-dialog v-model="isDialogDisplayed" width="auto">
    <v-card>
      <v-card-text>
        Are you sure you want to delete?:
        <v-card>
          <v-card-text class="ql-editor">
            <div
              v-html="box.title"
            />
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
        <v-btn @click="isDialogDisplayed = false">No</v-btn>
        <v-btn @click="deleteBox">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
