<template>
  <div class="h-screen">
    <UiBaseHeader/>
    <main class="bg-light dark:bg-dark space-y-8 p-10 main">
      <UiSwitchTheme />
    </main>
    <UiBaseFooter class="md:hidden"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
  .main {
    height: calc(100% - var(--header) - var(--footer));
  }

  @media (min-width: 768px) {
    .main {
      height: calc(100% - var(--header));
    }
  }
</style>
