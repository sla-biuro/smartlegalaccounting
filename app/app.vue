<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-cyan-100 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-[0.02] pointer-events-none">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, rgb(37 99 235) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgb(250 204 21) 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>
    
    <Header />

    <!-- navigation progress bar (shows when navigation is slow) -->
    <div v-if="progress.show" class="fixed top-0 left-0 h-1 z-50 w-full bg-transparent pointer-events-none">
      <div class="h-1 bg-gradient-to-r from-brandBlue via-brandLightBlue to-brandYellow transition-all" :style="{ width: progress.width + '%' }"></div>
    </div>
      <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~~/components/Header.vue";
import Footer from "~~/components/Footer.vue";
import { ref, reactive, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useLocale } from '../composables/useLocale'
import { useCompany } from '../composables/useCompany'
import { useSeo } from '../composables/useSeo'
import { useHead, useRuntimeConfig } from 'nuxt/app'

// simple navigation progress: only appears when navigation takes longer than 120ms
const progress = reactive({ show: false, width: 0 })
let progressTimer: ReturnType<typeof setInterval> | null = null
let showTimer: ReturnType<typeof setTimeout> | null = null

const router = useRouter()
router.beforeEach((to, from, next) => {
  // start a delayed show so quick navigations don't flash the bar
  showTimer = setTimeout(() => {
    progress.show = true
    progress.width = 10
    progressTimer = setInterval(() => {
      // increment width slowly up to 85% while loading
      if (progress.width < 85) progress.width += Math.random() * 8
    }, 250)
  }, 120)
  next()
})

router.afterEach(() => {
  if (showTimer) { clearTimeout(showTimer); showTimer = null }
  if (progressTimer) { clearInterval(progressTimer); progressTimer = null }
  if (progress.show) {
    progress.width = 100
    setTimeout(() => { progress.show = false; progress.width = 0 }, 220)
  }
})

// keep <html lang> in sync with selected locale
const { locale } = useLocale()
// Keep <html lang> reactive and add JSON-LD for Organization/WebSite
const { name, email, phone, brand } = useCompany()
const config = useRuntimeConfig()
const siteUrl = (config.public?.siteUrl as string) || ''

watch(locale, (l) => {
  useHead({ htmlAttrs: { lang: l } })
}, { immediate: true })

const orgJsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: name.value,
  url: siteUrl || undefined,
  email: email.value,
  telephone: phone.value,
  logo: siteUrl ? siteUrl.replace(/\/$/, '') + '/logo.png' : '/logo.png',
  sameAs: [] as string[]
}))

const webSiteJsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: name.value,
  url: siteUrl || undefined
}))

useHead({
  link: [
  { rel: 'icon', type: 'image/png', href: '/logo.png' },
  { rel: 'alternate icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
  { rel: 'alternate icon', type: 'image/png', sizes: '48x48', href: '/favicon-48x48.png' },
    { rel: 'shortcut icon', href: '/favicon.ico' }
  ],
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(orgJsonLd.value), id: 'ld-org' },
    { type: 'application/ld+json', innerHTML: JSON.stringify(webSiteJsonLd.value), id: 'ld-website' }
  ],
  // @ts-ignore - unhead: instruct to not sanitize JSON-LD
  __dangerouslyDisableSanitizersByTagID: {
    'ld-org': ['innerHTML'],
    'ld-website': ['innerHTML']
  }
})
</script>

<style scoped>
.page-fade-enter-from { opacity: 0; transform: translateY(6px); }
.page-fade-enter-active { transition: opacity 260ms ease, transform 260ms ease; }
.page-fade-leave-to { opacity: 0; transform: translateY(-6px); }
.page-fade-leave-active { transition: opacity 220ms ease, transform 220ms ease; }
</style>