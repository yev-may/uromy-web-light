<script setup lang="ts">
import CardSide from '@/components/CardSide.vue'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { ref } from "vue"
import { studyService_submitAnswer } from '@/core/service/studyService'

const props = defineProps<{
  card: Card,
  submitCallback: Function,
}>()

const confirmAnswer = (isRight: boolean): void => {
  studyService_submitAnswer(props.card, isRight)
  props.submitCallback()
}

const answerShowed = ref(false)
</script>

<template>
  <CardSide
    :content="card.question"
  />
  <CardSide
    v-if="answerShowed"
    :content="card.answer"
  />
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
