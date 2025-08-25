<template>
  <header class="sticky top-0 z-50">
    <div class="backdrop-blur-md bg-gradient-to-r from-white/30 to-white/10 dark:from-black/30 dark:to-black/10 border-b border-gray-200/50 dark:border-gray-700/40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="h-16 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
              <!-- simple truck icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 13v-6a2 2 0 0 1 2-2h9v8" />
                <path d="M13 13h6l2 3v3H20" />
                <circle cx="7.5" cy="18.5" r="1.5" />
                <circle cx="18.5" cy="18.5" r="1.5" />
              </svg>
            </div>
            <div class="text-lg font-semibold text-gray-800 dark:text-gray-100">ACME Logistics</div>
          </div>
          <nav class="hidden md:flex items-center gap-4">
            <a class="text-sm text-gray-700 dark:text-gray-200 hover:underline" href="#">Features</a>
            <a class="text-sm text-gray-700 dark:text-gray-200 hover:underline" href="#">Pricing</a>
            <button class="ml-2 inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md">Get Started</button>
          </nav>
          <div class="md:hidden">
            <!-- mobile menu placeholder -->
            <button aria-label="Open menu" class="p-2 rounded-md bg-gray-100 dark:bg-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// no state needed yet
</script>
