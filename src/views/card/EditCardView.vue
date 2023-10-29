<script setup lang="ts">
import ViewTemplate from "@/views/ViewTemplate.vue";
import BackButton from "@/components/struct/BackButton.vue";
import CardForm from "@/components/card/CardForm.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";
import cardDao from "@/core/dao/cardDao";

const route = useRoute();

const formRefreshKey = ref(0)
const card: Card = cardDao.getCard({
  boxId: route.params.boxId as string,
  id: route.params.cardId as string,
})

function updateCard(card: Card) {
  cardDao.updateCard(card)
  router.back()
}
</script>

<template>
  <ViewTemplate>
    <template v-slot:mid-section>
      <h2 class="text-center mb-3">Edit card</h2>
      <CardForm
        :key="formRefreshKey"
        :card-form-template="card"
        :submit-function="updateCard"
        button-text="Save"
      />
    </template>
    <template v-slot:bot-section>
      <BackButton/>
    </template>
  </ViewTemplate>
</template>
