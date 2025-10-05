// https://nuxt.com/docs/api/configuration/nuxt-config
import info from './information.json'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // PostCSS (Tailwind + Autoprefixer)
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  // Enable modules
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  // Tailwind
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true,
  },
  // Enable SSR for SEO and prerender all routes as static HTML
  // (uses Nitro preset for GitHub Pages hosting)
  nitro: {
    preset: 'github_pages'
  },
  routeRules: {
      '/**': { prerender: true },
    '/sitemap.xml': { prerender: true }
  },
  runtimeConfig: {
    public: {
        // Public canonical site URL (used for sitemap, canonical, OG)
        // Override via env var NUXT_PUBLIC_SITE_URL in deployment
        siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://smartlegalacc.com'
    }
  },
    // Default app head tags
  app: {
    baseURL: '/',
    cdnURL: '/',
    head: {
      title: `${(info as any)?.company?.name?.en || 'Site'}`,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: (info as any)?.company?.brand?.colors?.primary || '#2563eb' },
        { name: 'robots', content: 'index,follow' },
        // Open Graph defaults
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: (info as any)?.company?.name?.en || 'Site' },
        { property: 'og:image', content: '/logo.png' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' }
      ]
    }
  },
  // Sitemap options (nuxt-simple-sitemap)
  
})
