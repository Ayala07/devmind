<template>
  <div class="h-screen overflow-hidden">
    <main class="h-full dark:(bg-dark text-white)">
      <UiSwitchTheme class="flex justify-end p-4" />
      <div>
        <h1 class="text-center text-3xl font-bold">Devmind</h1>
      </div>

      <div class="login-body h-full mt-12 pt-56 flex justify-center bg-light dark:(bg-blue-main-800)">
        <p>Iniciar sesión con Google</p>
      </div>
    </main>
  </div>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  name: 'Login',
})
</script>

<style scoped>
  .login-body {
    width: 200%;
    margin-left: -50%;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
  }
</style>
