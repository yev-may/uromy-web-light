<script setup lang="ts">
import ViewContainer from '@/views/ViewContainer.vue'
</script>

<template>
  <div class="h-100 w-100 d-flex flex-column justify-space-between">
    <div class="w-100">
      <ViewContainer>
        <slot name="top-section"/>
      </ViewContainer>
    </div>
    <div class="h-100 w-100 d-flex flex-column justify-center">
      <ViewContainer>
        <slot name="mid-section"/>
      </ViewContainer>
    </div>
    <div class="w-100">
      <ViewContainer>
        <slot name="bot-section"/>
      </ViewContainer>
    </div>
  </div>
</template>
