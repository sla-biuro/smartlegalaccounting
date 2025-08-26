// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  nitro: {
    preset: process.env.NODE_ENV === 'production' && !process.env.NUXT_APP_BASE_URL ? 'github_pages' : undefined
  },
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || (process.env.NODE_ENV === 'production' ? '/logistics-site/' : '/'),
  }
})
