<template>
  <button
    class="rounded-full py-2 px-6 flex items-center"
    :class="type"
  >
    <VsIcon :icon="socialComponents" class="mr-2" />
    {{ text }}
  </button>
</template>

<script>
import { computed, defineComponent, reactive } from "@nuxtjs/composition-api"

export default defineComponent({
  name: 'SocialLoginButton',
  props: {
    type: {
      type: String,
      default: 'google',
      validate: value => ['google'].includes(value),
    },
    text: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const socialOptions = reactive({
      google: 'catching_pokemon'
    });

    const socialComponents = computed(() => {
      return socialOptions[props.type]
    });

    return { socialComponents }
  }

})
</script>

<style scoped>
  .google {
    @apply bg-red-main-600 border-red-main-600 text-white;
  }
</style>
