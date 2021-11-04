<template>
  <header class="flex items-center justify-between p-4 h-56px dark:(bg-blue-main-800 text-white)">
    <NuxtLink class="flex items-center" to="/">
      <VsIcon class="w-5 mr-3" icon="personal_video"/>
      <h1 class="font-bold text-base">Devmind</h1>
    </NuxtLink>

    <NuxtLink class="hidden md:block" to="/profile">
      <img
        class="w-10 rounded-full"
        src="@/assets/images/defaultImage.jpg"
        alt="Imagen del usuario"
      >
    </NuxtLink>
  </header>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: 'BaseHeader',
})
</script>
