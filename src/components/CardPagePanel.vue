<script setup lang="ts">
import CardPanel from "@/components/CardPanel.vue"
import { ref, watch } from "vue"
import cardDao from "@/core/dao/cardDao";
import studyService from "@/core/service/studyService";

const PAGE_SIZE: number = 5
const pageCount = ref<number>(cardDao.getCardPageCount(PAGE_SIZE))
const pageSelected = ref<number>(1)
const cards = ref<Array<Card>>(cardDao.getCardPage(0, PAGE_SIZE))

const updateCards = (): void => {
  pageCount.value = cardDao.getCardPageCount(PAGE_SIZE)
  cards.value = cardDao.getCardPage(pageSelected.value - 1, PAGE_SIZE)
}

watch(pageSelected, () => updateCards())

const deleteCardAction = (cardId: string | null): void => {
  if (!cardId) return

  studyService.deleteCard(cardId)
  updateCards()
}
</script>

<template>
  <div>
    <CardPanel
      v-for="card in cards"
      :card="card"
      :delete-function="() => deleteCardAction(card.id)"
    />
  </div>
  <v-pagination
    class="mt-3"
    v-model="pageSelected"
    :length="pageCount"/>
</template>
