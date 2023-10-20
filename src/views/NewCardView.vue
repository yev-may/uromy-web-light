<script setup lang="ts">
import BackButton from "@/components/BackButton.vue"
import CardForm from "@/components/CardForm.vue"
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
  <div class="h-100 w-100 d-flex flex-column justify-space-between">
    <div class="h-100 w-100 d-flex flex-column justify-center">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <CardForm
              :key="formRefreshKey"
              :card-form-template="createCardFormTemplate()"
              :submit-function="createCardToStudy"
              button-text="Add"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="w-100">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <BackButton />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
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
