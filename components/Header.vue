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
            <div class="text-lg font-semibold text-neutral dark:text-surface">ACME Logistics</div>
          </NuxtLink>
          <nav class="hidden md:flex items-center gap-4">
            <NuxtLink class="text-sm text-muted hover:underline" to="/features">Features</NuxtLink>
            <NuxtLink class="text-sm text-muted hover:underline" to="/pricing">Pricing</NuxtLink>
            <NuxtLink class="text-sm text-muted hover:underline" to="/contact">Contact Us</NuxtLink>
            <NuxtLink class="ml-2 inline-flex items-center px-3 py-1.5 bg-primary text-surface text-sm rounded-md" to="/get-started">Get Started</NuxtLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// no state needed yet
</script>
