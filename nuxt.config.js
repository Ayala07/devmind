export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'devmind',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuesax/dist/vuesax.css',
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vuesax.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api/module',
    // https://windicss.org/integrations/nuxt.html
    'nuxt-windicss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org/
    '@nuxtjs/firebase',
  ],

  // Configuration from color-mode module
  colorMode: {
    preference: 'dark',
    fallback: 'light',
    classSuffix: '',
  },

  firebase: {
    config: {
      apiKey: process.env.VUE_APP_FIREBASE_KEY,
      authDomain: "devmind-6dcc6.firebaseapp.com",
      projectId: "devmind-6dcc6",
      storageBucket: "devmind-6dcc6.appspot.com",
      messagingSenderId: "676798224295",
      appId: "1:676798224295:web:1de96c9f330d25e5698882",
      measurementId: "G-PR39R80YJ9"
    },
    services: {
      auth: true,
      firestore: true,
      storage: true,
      analytics: true,
      performance: true,
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  env: {
    VUE_APP_FIREBASE_KEY: process.env.VUE_APP_FIREBASE_KEY
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
