<script setup lang="ts">
import CardPanel from "@/components/CardPanel.vue"
import { ref, watch } from "vue"
import { getCardPage, getCardPageCount } from "@/core/dao/cardDao"
import { deleteCardApi } from "@/core/facade/cardFacade"

const PAGE_SIZE: number = 5
const pageCount = ref<number>(getCardPageCount(PAGE_SIZE))
const pageSelected = ref<number>(1)
const cards = ref<Array<Card>>(getCardPage(0, PAGE_SIZE))

const updateCards = (): void => {
  pageCount.value = getCardPageCount(PAGE_SIZE)
  cards.value = getCardPage(pageSelected.value - 1, PAGE_SIZE)
}

watch(pageSelected, () => updateCards())

const deleteCardAction = (cardId: string | null): void => {
  if(!cardId) return

  deleteCardApi(cardId)
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
    :length="pageCount" />
</template>
