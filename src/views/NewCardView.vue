<script setup lang="ts">
import BackButton from "@/components/BackButton.vue"
import CardForm from "@/components/CardForm.vue"
import { ref } from "vue"
import { createStudyCard } from "@/core/service/studyService"

const formRefreshKey = ref(true)

const createCardFormTemplate = (): Card => {
  return {
    id: null,
    question: '',
    answer: '',
  }
}

const createCardToStudy = (card: Card) => {
  createStudyCard(card)
  formRefreshKey.value = !formRefreshKey.value
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
</template>
