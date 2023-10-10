<template>
  <div class="navigation">
    <div class="navigation-item">
      <a class="navigation-link v-btn" href="/study">Study</a>
    </div>
    <div class="navigation-item">
      <a class="navigation-link v-btn" href="/about">About</a>
    </div>
  </div>
</template>

<style scoped lang="css">
.navigation {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  .navigation-item {
    margin-right: 15px;

    .navigation-link {
      color: black;
    }
  }
}
</style>
