<template>
  <main class="max-w-4xl mx-auto py-20 px-4">
    <h1 class="text-3xl font-bold mb-6">Features</h1>
    <div class="space-y-6">
      <div v-for="(f, idx) in features" :key="idx" class="p-6 bg-white/60 rounded-lg shadow">
        <h2 class="font-semibold text-lg">{{ f.title }}</h2>
        <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
          <li v-for="(b, j) in f.bullets" :key="j">{{ b }}</li>
        </ul>
      </div>
    </div>
  </main>
  
</template>

<script setup>
import { computed } from 'vue'
import { useCompany } from '../../../composables/useCompany'

const { features: feats, name } = useCompany()
const features = computed(() => feats.value)
useHead(() => ({ title: `Features – ${name.value}` }))
</script>
