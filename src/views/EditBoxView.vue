<script setup lang="ts">
import BackButton from "@/components/BackButton.vue";
import { useRoute } from "vue-router";
import boxDao from "@/core/dao/boxDao";
import BoxForm from "@/components/BoxForm.vue";

const route = useRoute();
const box: Box = boxDao.getBox(route.params.boxId as string)
</script>

<template>
  <div class="h-100 w-100 d-flex flex-column justify-space-between">

    <div class="h-100 w-100 d-flex flex-column justify-center">
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" sm="6" md="4">
            <BoxForm
              :box-id="box.id"
              :box-form-template="box"
              buttonText="Save"
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
