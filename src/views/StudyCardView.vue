<script setup lang="ts">
import BackButton from "@/components/BackButton.vue"
import StudyCard from "@/components/StudyCard.vue"
import { reactive, onMounted } from "vue"
import studyService from "@/core/service/studyService";

const card = reactive<Card>({ id: '', question: '', answer: ''})

const updateCard = () => {
  const nextCard: Card | null = studyService.getNextCard();
  if(!nextCard) {
    card.id = ''
    return
  }
  syncCard(nextCard);
}

const syncCard = (nextCard: Card) => {
  card.id = nextCard.id;
  card.question = nextCard.question;
  card.answer = nextCard.answer;
}

onMounted(() => updateCard());
</script>

<template>
  <div class="h-100 w-100 d-flex flex-column justify-space-between">
    <div class="h-100 w-100 d-flex flex-column justify-center">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <p class="text-center"
               v-if="!card.id"
            >No cards to repeat</p>
            <StudyCard
              v-else
              :key="card.id"
              :card="card"
              :submit-callback="updateCard"
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
