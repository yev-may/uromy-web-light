<script setup lang="ts">
import ViewTemplate from "@/views/ViewTemplate.vue";
import BackButton from "@/components/struct/BackButton.vue"
import ViewContainer from "@/views/ViewContainer.vue";
import DialogWindow from "@/components/struct/DialogWindow.vue";
import CardForm from "@/components/card/CardForm.vue"
import { ref } from "vue"
import studyService from "@/core/service/studyService";
import { useRoute } from "vue-router";

const route = useRoute()

const boxId: string = route.params.boxId as string
const formRefreshKey = ref(0)
const dialog = ref(false)

const createCardFormTemplate = (): NewCardForm => {
  return {
    boxId: boxId,
    question: '',
    answer: '',
  }
}

const createCardToStudy = (card: NewCardForm) => {
  studyService.createStudyCard(card)
  formRefreshKey.value++
  dialog.value = true
}
</script>

<template>
  <ViewTemplate>
    <template v-slot:mid-section>
      <h2 class="text-center mb-3">New card</h2>
      <CardForm
        :key="formRefreshKey"
        :card-form-template="createCardFormTemplate()"
        :submit-function="createCardToStudy"
        button-text="Add"
      />
    </template>
    <template v-slot:bot-section>
      <BackButton/>
    </template>
  </ViewTemplate>

  <v-dialog v-model="dialog">
    <ViewContainer>
      <DialogWindow>
        <template v-slot:text>
          Card created
        </template>
        <template v-slot:actions>
          <v-btn block variant="outlined" @click="dialog = false">OK</v-btn>
        </template>
      </DialogWindow>
    </ViewContainer>
  </v-dialog>
</template>
