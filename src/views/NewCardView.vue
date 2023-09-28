<script setup lang="ts">
import BackButton from "@/components/BackButton.vue"
import CardForm from "@/components/CardForm.vue"
import { ref } from "vue"
import { createStudyCard } from "@/core/service/studyService"

const formRefreshKey = ref(true)
const overlay = ref(false)

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
  overlay.value = true
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
  <v-overlay
    class="align-center justify-center"
    v-model="overlay"
  >
    <v-card class="pa-2">
      <v-card-text>
        <p>Card created</p>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn
          text="Ok"
          variant="outlined"
          @click="overlay = false"
        />
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>
