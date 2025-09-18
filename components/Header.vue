<template>
  <header class="sticky top-0 z-50">
    <div class="backdrop-blur-md bg-gradient-to-r from-white/30 to-white/10 dark:from-black/30 dark:to-black/10 border-b border-gray-200/50 dark:border-gray-700/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="h-16 flex items-center justify-between">
          <NuxtLink to="/" aria-label="Home" class="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-md">
            <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-surface flex-shrink-0">
              <!-- simple truck icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 13v-6a2 2 0 0 1 2-2h9v8" />
                <path d="M13 13h6l2 3v3H20" />
                <circle cx="7.5" cy="18.5" r="1.5" />
                <circle cx="18.5" cy="18.5" r="1.5" />
              </svg>
            </div>
            <div class="text-lg font-semibold text-neutral dark:text-surface">{{ companyName }}</div>
          </NuxtLink>
          <nav class="hidden md:flex items-center gap-4">
            <template v-for="(item, idx) in nav" :key="idx">
              <NuxtLink v-if="!item.emphasis" class="text-sm text-muted hover:underline" :to="item.to">{{ item.label }}</NuxtLink>
              <NuxtLink v-else class="ml-2 inline-flex items-center px-3 py-1.5 bg-primary text-surface text-sm rounded-md" :to="item.to">{{ item.label }}</NuxtLink>
            </template>
            <div class="ml-3 pl-3 border-l border-gray-300/60 dark:border-gray-700/60 flex items-center gap-2">
              <button
                class="px-2 py-1 text-xs rounded-md"
                :class="locale === 'en' ? 'bg-gray-200/70 dark:bg-gray-700/60' : ''"
                @click="setLocale('en')"
                aria-label="Switch to English"
              >EN</button>
              <button
                class="px-2 py-1 text-xs rounded-md"
                :class="locale === 'pl' ? 'bg-gray-200/70 dark:bg-gray-700/60' : ''"
                @click="setLocale('pl')"
                aria-label="Przełącz na polski"
              >PL</button>
            </div>
          </nav>
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="open = !open" :aria-expanded="open" aria-label="Toggle menu" class="p-2 rounded-md bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary/60">
              <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile menu panel -->
    <transition name="mobile-menu">
      <div v-if="open" class="md:hidden bg-white/80 dark:bg-gray-900/80 border-t border-gray-200/50 dark:border-gray-700/40">
        <div class="px-4 py-3 space-y-2">
          <template v-for="(item, idx) in nav" :key="'m-'+idx">
            <NuxtLink v-if="!item.emphasis" class="block text-base text-gray-700 dark:text-gray-200 py-2" :to="item.to" @click="open = false">{{ item.label }}</NuxtLink>
            <NuxtLink v-else class="block text-base bg-primary text-surface py-2 px-3 rounded-md" :to="item.to" @click="open = false">{{ item.label }}</NuxtLink>
          </template>
          <div class="flex items-center gap-2 pt-2">
            <button class="px-2 py-1 text-xs rounded-md border" :class="locale === 'en' ? 'bg-gray-200/70 dark:bg-gray-700/60' : ''" @click="setLocale('en'); open=false">EN</button>
            <button class="px-2 py-1 text-xs rounded-md border" :class="locale === 'pl' ? 'bg-gray-200/70 dark:bg-gray-700/60' : ''" @click="setLocale('pl'); open=false">PL</button>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCompany } from '../composables/useCompany'
import { useLocale } from '../composables/useLocale'

const open = ref(false)

const { name, navigation } = useCompany()
const companyName = computed(() => name.value)
const nav = computed(() => navigation.value)

const { locale, setLocale } = useLocale()
</script>

<style scoped>
/* mobile menu transition */
.mobile-menu-enter-from { transform: translateY(-6px); opacity: 0 }
.mobile-menu-enter-active { transition: transform 180ms ease, opacity 180ms ease }
.mobile-menu-enter-to { transform: translateY(0); opacity: 1 }
.mobile-menu-leave-from { transform: translateY(0); opacity: 1 }
.mobile-menu-leave-active { transition: transform 140ms ease, opacity 140ms ease }
.mobile-menu-leave-to { transform: translateY(-6px); opacity: 0 }
</style>
