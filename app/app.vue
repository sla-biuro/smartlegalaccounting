<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <Header />

    <!-- navigation progress bar (shows when navigation is slow) -->
    <div v-if="progress.show" class="fixed top-0 left-0 h-1 z-50 w-full bg-transparent pointer-events-none">
      <div class="h-1 bg-primary transition-all" :style="{ width: progress.width + '%' }"></div>
    </div>

    <transition name="page-fade" mode="out-in">
      <NuxtPage />
    </transition>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "~~/components/Header.vue";
import Footer from "~~/components/Footer.vue";
import { ref, reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLocale } from '../composables/useLocale'

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
if (process.client) {
  watch(locale, (l) => { document.documentElement.lang = l }, { immediate: true })
}
</script>

<style scoped>
/* page transition */
.page-fade-enter-from { opacity: 0; transform: translateY(6px); }
.page-fade-enter-active { transition: opacity 260ms ease, transform 260ms ease; }
.page-fade-leave-to { opacity: 0; transform: translateY(-6px); }
.page-fade-leave-active { transition: opacity 220ms ease, transform 220ms ease; }
</style>