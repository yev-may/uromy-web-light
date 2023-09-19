<script setup lang="ts">
import { ref } from "vue"
import { submitAnswer } from "@/core/service/studyService";

const props = defineProps<{
  card: Card,
  submitCallback: Function,
}>()

const confirmAnswer = (isRight: boolean): void => {
  submitAnswer(props.card, isRight)
  props.submitCallback()
}

const answerShowed = ref(false)
</script>

<template>
  <v-sheet
    class="pa-3"
    color="grey-lighten-3"
    border
    rounded
  >
    <p>{{ card.question }}</p>
  </v-sheet>
  <v-sheet
    v-if="answerShowed"
    class="pa-3 mt-3"
    color="grey-lighten-3"
    border
    rounded
  >
    <p>{{ card.answer }}</p>
  </v-sheet>
  <v-container class="pa-0 mt-3">
    <v-row v-if="!answerShowed">
      <v-col>
        <v-btn
          class="w-100"
          v-if="!answerShowed"
          text="Show Answer"
          @click="answerShowed = true"
        />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <v-btn
          class="w-100"
          text="Wrong"
          @click="confirmAnswer(false)"
        />
      </v-col>
      <v-col>
        <v-btn
          class="w-100"
          text="Right"
          @click="confirmAnswer(true)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
