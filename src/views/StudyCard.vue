<script setup lang="ts">
import BackButton from "@/components/BackButton.vue"
import StudyCard from "@/components/StudyCard.vue"
import { reactive, onMounted } from "vue"
import { getNextCard } from "@/core/service/studyService"

const card = reactive<Card>({
  id: null,
  question: '',
  answer: '',
})

const updateCard = () => {
  card.id = null;
  const nextCard: Card | null = getNextCard();
  if(nextCard) {
    syncCard(nextCard);
  }
}

const syncCard = (nextCard: Card) => {
  card.id = nextCard.id;
  card.question = nextCard.question;
  card.answer = nextCard.answer;
}

onMounted(() => updateCard());
</script>

<template>
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

    <v-row class="justify-center">
      <v-col cols="12" sm="6" md="4">
        <BackButton />
      </v-col>
    </v-row>
  </v-container>
</template>
