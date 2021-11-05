<template>
  <div>
    <VsIcon
      v-if="$colorMode.preference !== 'light'"
      class="cursor-pointer w-6 h-6"
      color="white"
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
  name: 'SwitchTheme',
  setup() {
    const { $colorMode } = useContext();

    const switchTheme = (theme: string) => {
      $colorMode.preference = theme;
    };

    return {switchTheme};
  },
})
</script>
