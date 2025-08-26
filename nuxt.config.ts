// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  nitro: {
    preset: 'github_pages'
  },
  app: {
    baseURL: '/logistics-site/',
  },
  // Override for local development
  $development: {
    app: {
      baseURL: '/'
    },
    nitro: {
      preset: 'static'
    }
  }
})
