// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  //css: ['~/assets/css/tailwind.css'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true,
  },
  nitro: {
    preset: 'github_pages'
  },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/logistics-site/' : '/',
    cdnURL: process.env.NODE_ENV === 'production' ? '/logistics-site/' : '/'
  },
})
