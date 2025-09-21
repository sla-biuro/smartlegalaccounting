<template>
  <!-- Hero Section -->
  <section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-brandBlue/10 via-brandLightBlue/5 to-brandYellow/10"></div>
    </div>
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <h1 class="text-5xl md:text-6xl font-extrabold gradient-text mb-4">{{ pageTitle }}</h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">Ready to streamline your business operations? Let's get started!</p>
      <NuxtLink to="/contact" class="btn-gradient text-lg px-8 py-4 rounded-xl font-semibold">Contact Us Today</NuxtLink>
    </div>
  </section>

  <main class="max-w-6xl mx-auto py-20 px-6">
    <div class="text-center">
      <div class="card p-12">
        <h2 class="text-3xl font-bold gradient-text mb-6">Simple Steps to Get Started</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brandBlue to-brandLightBlue flex items-center justify-center text-white shadow-lg text-2xl font-bold">1</div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Contact Us</h3>
            <p class="text-gray-600 dark:text-gray-300">Reach out to discuss your business needs and requirements</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brandLightBlue to-brandYellow flex items-center justify-center text-white shadow-lg text-2xl font-bold">2</div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Get Quote</h3>
            <p class="text-gray-600 dark:text-gray-300">Receive a customized quote based on your specific requirements</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brandYellow to-amber-400 flex items-center justify-center text-white shadow-lg text-2xl font-bold">3</div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Start Working</h3>
            <p class="text-gray-600 dark:text-gray-300">Begin enjoying professional logistics and business support services</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useTexts } from '../../../data/texts'
import { useCompany } from '../../../composables/useCompany'
import { useSeo } from '../../../composables/useSeo'

const { t } = useTexts()
const { name } = useCompany()
const pageTitle = computed(() => t.value.nav.getStarted || 'Get Started')
const { setSeo } = useSeo()
setSeo({ description: 'Get started with SmartLegal Accounting — learn how to onboard, share your documents securely, and select services such as bookkeeping, HR & payroll, tax filings, and transport licensing support.' })
</script>
