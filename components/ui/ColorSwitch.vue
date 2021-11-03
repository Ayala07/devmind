<template>
  <div class="flex flex-col content-center">
    <p class="w-full">{{ $colorMode.preference }}</p>
    <VsIcon
      v-if="$colorMode.preference !== 'light'"
      class="cursor-pointer"
      icon="wb_incandescent"
      @click="switchTheme('light')"
    />

    <VsIcon
      v-else
      class="cursor-pointer"
      icon="wb_sunny"
      @click="switchTheme('dark')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api';


export default defineComponent({
  name: 'ColorSwitch',
  setup() {
    const { $colorMode } = useContext();

    const switchTheme = (theme: string) => {
      $colorMode.preference = theme;
    };

    return {switchTheme};
  },
})
</script>
