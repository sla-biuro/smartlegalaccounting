<template>
  <main class="max-w-5xl mx-auto py-20 px-4">
    <h1 class="text-3xl font-bold mb-8">Pricing</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="(p, idx) in pricing" :key="idx" class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white/60 p-6 shadow-sm">
        <div class="text-xl font-semibold">{{ p.name }}</div>
        <div class="mt-1 text-primary font-bold">{{ p.price }}</div>
        <ul class="mt-4 text-sm text-gray-700 space-y-1 list-disc list-inside">
          <li v-for="(i, j) in p.includes" :key="j">{{ i }}</li>
        </ul>
        <NuxtLink to="/contact" class="mt-6 inline-flex px-4 py-2 bg-primary text-surface rounded-md">Contact</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useCompany } from '../../../composables/useCompany'

const { pricing: pr, name } = useCompany()
const pricing = computed(() => pr.value)
useHead(() => ({ title: `Pricing – ${name.value}` }))
</script>
