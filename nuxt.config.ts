// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  ssr: false,
  nitro: {
    preset: 'github_pages'
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/logistics-site/' : '/',
    cdnURL: process.env.NODE_ENV === 'production' ? '/logistics-site/' : '/'
  }
})
