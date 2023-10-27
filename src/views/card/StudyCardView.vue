<script setup lang="ts">
import ViewTemplate from "@/views/ViewTemplate.vue";
import BackButton from "@/components/struct/BackButton.vue"
import StudyCard from "@/components/card/StudyCard.vue"
import { reactive, onMounted } from "vue"
import studyService from "@/core/service/studyService";
const card = reactive<Card>({ key: {id: '', boxId: '' }, question: '', answer: ''})

const updateCard = () => {
  const nextCard: Card | null = studyService.getNextCard();
  if(!nextCard) {
    card.key = {id: '', boxId: '' }
    return
  }
  syncCard(nextCard);
}

const syncCard = (nextCard: Card) => {
  card.key = { id: nextCard.key.id, boxId: nextCard.key.boxId }
  card.question = nextCard.question;
  card.answer = nextCard.answer;
}
onMounted(() => updateCard());
</script>

<template>
  <ViewTemplate>
    <template v-slot:mid-section>
      <p class="text-center"
         v-if="!card.key.id"
      >No cards to repeat</p>
      <StudyCard
        v-else
        :key="card.key.id"
        :card="card"
        :submit-callback="updateCard"
      />
    </template>
    <template v-slot:bot-section>
      <BackButton/>
    </template>
  </ViewTemplate>
</template>
