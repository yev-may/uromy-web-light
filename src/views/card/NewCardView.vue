<script setup lang="ts">
import ViewTemplate from "@/views/ViewTemplate.vue";
import BackButton from "@/components/struct/BackButton.vue"
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

  <v-dialog v-model="dialog" width="auto">
    <v-card>
      <v-card-text>
        Card created
      </v-card-text>
      <v-card-actions>
        <v-btn block variant="outlined" @click="dialog = false">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
