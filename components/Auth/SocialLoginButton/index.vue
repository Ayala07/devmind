<template>
  <VsButton
    type="filled"
    :color="socialComponents.colors"
    :icon="socialComponents.icons"
    @click="$emit('click', type)"
  >
    {{text}}
  </VsButton>
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
      icons: {
        google: 'catching_pokemon'
      },
      colors: {
        google: 'danger'
      }
    });

    const socialComponents = computed(() => {
      return {
        icons: socialOptions.icons[props.type],
        colors: socialOptions.colors[props.type],
      }
    });


    return { socialComponents }
  }

})
</script>
