<template>
  <footer class="flex justify-around h-83px px-5 py-2 dark:(bg-blue-main-800 text-white)">
    <NuxtLink
      v-for="(link, index) in links" :key="index"
      :to="link.url"
      class="flex flex-col items-center"
    >
      <VsIcon class="w-8 h-8" :icon="link.icon" :alt="link.name" />
      <span>{{ link.name }}</span>
    </NuxtLink>
  </footer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "@nuxtjs/composition-api"


export default defineComponent({
  name: 'BaseFooter',
  setup() {
    const state = reactive({
      links: [
        {
          icon: 'home',
          name: 'Inicio',
          url: '/',
        },
        {
          icon: 'add_circle_outline',
          name: 'Nuevo',
          url: '/add',
        },
        {
          icon: 'account_circle',
          name: 'Perfil',
          url: '/profile',
        },
      ]
    });

    return {...toRefs(state)}
  }
})

</script>
