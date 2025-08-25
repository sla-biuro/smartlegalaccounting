<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <Header />
    <main class="flex items-center justify-center py-24 px-4">
      <div class="max-w-3xl w-full text-center">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-red-600" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.366-.756 1.42-.756 1.786 0l6.518 13.468A1 1 0 0 1 15.69 18H4.31a1 1 0 0 1-.87-1.433L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-7a1 1 0 01.993.883L11 7v4a1 1 0 01-1.993.117L9 11V7a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
        </div>

        <h1 class="mt-6 text-4xl font-extrabold text-gray-900 dark:text-white">Something went wrong</h1>
        <p class="mt-3 text-lg text-gray-600 dark:text-gray-300">We couldn't complete your request.</p>

        <div class="mt-6 text-sm text-gray-600 dark:text-gray-300">
          <div>Status: <span class="font-medium text-gray-900 dark:text-white">{{ status }}</span></div>
          <div class="mt-1">Message: <span class="font-medium text-gray-800 dark:text-gray-200">{{ message }}</span></div>
        </div>

        <div class="mt-8 flex items-center justify-center gap-4">
          <NuxtLink to="/" class="px-5 py-3 bg-primary text-surface rounded-md">Go home</NuxtLink>
          <button @click="reload" class="px-5 py-3 border rounded-md">Try again</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '~~/components/Header.vue'

const props = defineProps<{ error?: { statusCode?: number; status?: number; message?: string } }>()
const status = props.error?.statusCode ?? props.error?.status ?? 500
const message = props.error?.message ?? 'An unexpected error occurred.'

function reload() {
  // simple retry: reload the page
  window.location.reload()
}
</script>

<style scoped>
/* Ensure actions are visible on small screens */
.mt-8 { margin-top: 2rem; }
</style>
