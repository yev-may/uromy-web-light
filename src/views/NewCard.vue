<script setup lang="ts">
import BackButton from "@/components/BackButton.vue"
import CardForm from "@/components/CardForm.vue"
import { reactive } from "vue"
import { saveCard } from "@/core/dao/cardDao"
import { createStudyCard } from "@/core/service/studyService";

const cardForm = reactive<Card>({
  id: null,
  question: '',
  answer: '',
})

const clearForm = (): void => {
  cardForm.id = null
  cardForm.question = ''
  cardForm.answer = ''
}

const createCardToStudy = (card: Card) => {
  const createdCard: Card = saveCard(card)
  createStudyCard(createdCard)
  clearForm()
}
</script>

<template>
  <v-container>
    <v-row class="justify-center">
      <v-col cols="12" sm="6" md="4">
        <CardForm
          :card-form="cardForm"
          :submit-function="createCardToStudy"
          button-text="Add"
        />
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="12" sm="6" md="4">
        <BackButton />
      </v-col>
    </v-row>
  </v-container>
</template>
