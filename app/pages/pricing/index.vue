<template>
  <!-- Hero Section -->
  <section class="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-brandBlue/10 via-brandLightBlue/5 to-brandYellow/10"></div>
    </div>
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <h1 class="text-5xl md:text-6xl font-extrabold gradient-text mb-4">{{ pageTitle }}</h1>
      <p class="text-xl text-gray-600 dark:text-gray-300">Transparent pricing for all your business needs</p>
    </div>
  </section>

  <main class="max-w-6xl mx-auto py-20 px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div v-for="(p, idx) in pricing" :key="idx" class="card p-8 hover:scale-[1.02] transition-all duration-300 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 opacity-10">
          <div class="w-full h-full rounded-full bg-gradient-to-br from-brandBlue to-brandYellow"></div>
        </div>
        <div class="relative z-10">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ p.name }}</h3>
          <div class="text-3xl font-bold gradient-text mb-6">{{ p.price }}</div>
          <ul class="space-y-3 mb-8">
            <li v-for="(i, j) in p.includes" :key="j" class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
              <div class="w-2 h-2 rounded-full bg-gradient-to-r from-brandBlue to-brandYellow mt-2 flex-shrink-0"></div>
              <span>{{ i }}</span>
            </li>
          </ul>
          <NuxtLink to="/contact" class="btn-gradient w-full py-3 text-center rounded-xl font-semibold">{{ contactLabel }}</NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useCompany } from '../../../composables/useCompany'
import { useTexts } from '../../../data/texts'
import { useSeo } from '../../../composables/useSeo'

const { pricing: pr, name } = useCompany()
const { t } = useTexts()
const pricing = computed(() => pr.value)
const pageTitle = computed(() => t.value.pricing?.title || 'Pricing')
const contactLabel = computed(() => t.value.contact.title)
const { setSeo } = useSeo()
setSeo({ description: `Transparent pricing for accounting (KPiR & Commercial Books), tax declarations (VAT, PIT, CIT), HR and payroll, company registration support, and transport management services.` })
</script>
