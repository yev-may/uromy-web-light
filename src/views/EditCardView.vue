<script setup lang="ts">
import BackButton from "@/components/BackButton.vue";
import CardForm from "@/components/CardForm.vue";
import { ref } from "vue";
import { cardDao_getCard, cardDao_updateCard } from "@/core/dao/cardDao";
import { useRoute } from "vue-router";
import router from "@/router";

const route = useRoute();
const formRefreshKey = ref(0)
const card: Card = cardDao_getCard(route.params.card as string)

function updateCard(card: Card) {
  cardDao_updateCard(card)
  router.back()
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
              :card-form-template="card"
              :submit-function="updateCard"
              button-text="Save"
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
