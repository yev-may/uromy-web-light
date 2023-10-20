<template>
  <div class="preview">
    <div class="preview__content">
      <slot />
    </div>
    <div class="preview__hider" />
  </div>
</template>

<style lang="css" scoped>
.preview {
  position: relative;
  overflow: hidden;
  max-height: 80px;

  .preview__content {
    position: relative;
  }

  .preview__hider {
    position: absolute;
    z-index: 1;
    bottom: 0;
    width: 100%;
    height: 15px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgb(var(--v-theme-background)) 100%);
  }

  &:hover {
    max-height: none;

    .preview__hider {
      display: none;
    }
  }
}
</style>
