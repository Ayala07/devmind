<template>
  <div class="h-screen overflow-hidden">
    <main class="h-full dark:(bg-dark text-white)">
      <UiSwitchTheme class="flex justify-end p-4" />
      <div>
        <h1 class="text-center text-3xl font-bold">Devmind</h1>
      </div>

      <div class="login-body h-full mt-12 pb-60 flex flex-col items-center justify-center bg-light dark:(bg-blue-main-800)">
        <AuthSocialLoginButton
        text="Iniciar Sesión con Google"
        @click="loginWithGoogle"
      />
        <p>Iniciar sesión con Google</p>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from "@nuxtjs/composition-api"

export default defineComponent({
  name: 'Login',
  setup() {
    const { $fire, $fireModule } = useContext();

    const loginWithGoogle = async () => {
      try {
        const provider = new $fireModule.auth.GoogleAuthProvider();
        const result = await $fire.auth.signInWithPopup(provider);

        // eslint-disable-next-line no-console
        console.log(result);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Login error: ${error}`);
      }
    };

    return { loginWithGoogle }
  },
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
