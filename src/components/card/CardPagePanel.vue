<script setup lang="ts">
import CardPanel from "@/components/card/CardPanel.vue";
import { ref, watch } from "vue"
import cardDao from "@/core/dao/cardDao";
import studyService from "@/core/service/studyService";
import router from "@/router";

const props = defineProps<{ box: Box }>()

const PAGE_SIZE: number = 5
const pageCount = ref<number>(cardDao.getCardPageCount(PAGE_SIZE, props.box.id))
const pageSelected = ref<number>(1)
const cards = ref<Array<Card>>(cardDao.getCardPage(0, PAGE_SIZE, props.box.id))

const updateCards = (): void => {
  pageCount.value = cardDao.getCardPageCount(PAGE_SIZE, props.box.id)
  cards.value = cardDao.getCardPage(pageSelected.value - 1, PAGE_SIZE, props.box.id)
}

watch(pageSelected, () => updateCards())

const deleteCardAction = (cardKey: CardKey): void => {
  if (!cardKey) return
  studyService.deleteCard(cardKey)
  updateCards()
}
</script>

<template>
  <v-pagination
    v-if="pageCount > 1"
    class="mt-3"
    v-model="pageSelected"
    :length="pageCount"/>
  <CardPanel
    v-for="card in cards"
    :card="card"
    :delete-function="() => deleteCardAction(card.key)"
  />
  <v-btn
    class="mt-3 w-100"
    text="Add Card"
    @click="router.push({ name: 'new-card', params: { boxId: box.id }})"
  />
</template>
