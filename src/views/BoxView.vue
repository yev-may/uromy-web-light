<script setup lang="ts">
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
  router.push({ name: 'boxes' })
}
</script>

<template>
  <div class="h-100 w-100 d-flex flex-column justify-space-between">
    <div class="h-100 w-100 d-flex flex-column justify-center">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <CardPagePanel
              :box="box"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="w-100">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4">
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
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <BackButton />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-dialog
      v-model="isDialogDisplayed"
      width="auto"
    >
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
  </div>
</template>
