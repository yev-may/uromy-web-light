<script setup lang="ts">
import ViewTemplate from "@/views/ViewTemplate.vue";
import BackButton from "@/components/struct/BackButton.vue";
import ViewContainer from "@/views/ViewContainer.vue";
import DialogWindow from "@/components/struct/DialogWindow.vue";
import CardPagePanel from "@/components/card/CardPagePanel.vue";
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
      <h2 class="text-center" v-html="box.title"></h2>
      <CardPagePanel :box="box"/>
    </template>
    <template v-slot:bot-section>
      <div class="d-flex justify-center">
        <v-btn
          icon="mdi-trash-can-outline"
          density="comfortable"
          @click="isDialogDisplayed = true"
        />
        <v-btn
          class="ml-3"
          icon="mdi-cog-outline"
          density="comfortable"
          @click="router.push({ name: 'edit-box', params: { 'boxId': box.id }})"
        />
      </div>
      <BackButton class="mt-5"/>
    </template>
  </ViewTemplate>

  <v-dialog v-model="isDialogDisplayed">
    <ViewContainer>
      <DialogWindow>
        <template v-slot:text>
          Are you sure you want to delete this box?
          <v-card>
            <v-card-text class="ql-editor">
              <div class="w-100"
                   v-html="box.title"
              />
            </v-card-text>
          </v-card>
        </template>
        <template v-slot:actions>
          <v-btn @click="isDialogDisplayed = false">No</v-btn>
          <v-btn @click="deleteBox">Yes</v-btn>
        </template>
      </DialogWindow>
    </ViewContainer>
  </v-dialog>
</template>

<style lang="css" scoped>

</style>
