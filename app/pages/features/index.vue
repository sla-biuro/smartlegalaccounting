<template>
  <div>
  <!-- Hero Section -->
  <section class="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-brandBlue/10 via-brandLightBlue/5 to-brandYellow/10"></div>
    </div>
    <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
      <h1 class="text-5xl md:text-6xl font-extrabold gradient-text mb-4">{{ pageTitle }}</h1>
      <p class="text-xl text-gray-600 dark:text-gray-300">Discover our comprehensive range of professional services</p>
    </div>
  </section>

  <main class="max-w-6xl mx-auto py-20 px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="card p-8 group hover:scale-[1.02] transition-all duration-300">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brandBlue to-sky-400 flex items-center justify-center text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ companyServices.accounting.title }}</h2>
        </div>
        <ul class="space-y-3">
          <li v-for="(b, j) in companyServices.accounting.items" :key="j" class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <div class="w-2 h-2 rounded-full bg-gradient-to-r from-brandBlue to-brandYellow mt-2 flex-shrink-0"></div>
            <span>{{ b }}</span>
          </li>
        </ul>
      </div>

      <div class="card p-8 group hover:scale-[1.02] transition-all duration-300">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ companyServices.hr.title }}</h2>
        </div>
        <ul class="space-y-3">
          <li v-for="(b, j) in companyServices.hr.items" :key="j" class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <div class="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 mt-2 flex-shrink-0"></div>
            <span>{{ b }}</span>
          </li>
        </ul>
      </div>

      <div class="card p-8 group hover:scale-[1.02] transition-all duration-300">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brandYellow to-amber-400 flex items-center justify-center text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ companyServices.company_registration_support.title }}</h2>
        </div>
        <ul class="space-y-3">
          <li v-for="(b, j) in companyServices.company_registration_support.items" :key="j" class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <div class="w-2 h-2 rounded-full bg-gradient-to-r from-brandYellow to-amber-400 mt-2 flex-shrink-0"></div>
            <span>{{ b }}</span>
          </li>
        </ul>
      </div>

      <div class="card p-8 group hover:scale-[1.02] transition-all duration-300">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">{{ companyServices.transport_management.title }}</h2>
        </div>
        <ul class="space-y-3">
          <li v-for="(b, j) in companyServices.transport_management.items" :key="j" class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
            <div class="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 mt-2 flex-shrink-0"></div>
            <span>{{ b }}</span>
          </li>
        </ul>
      </div>
    </div>
  </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCompany } from '../../../composables/useCompany'
import { useTexts } from '../../../data/texts'
import { useSeo } from '../../../composables/useSeo'

const { services: servs, name } = useCompany()
const { t } = useTexts()
const companyServices = computed(() => servs.value)
const pageTitle = computed(() => t.value.services.title)
const description = computed(() => `${companyServices.value.accounting.title}, ${companyServices.value.hr.title}, ${companyServices.value.company_registration_support.title}, ${companyServices.value.transport_management.title}`)
const { setSeo } = useSeo()
setSeo({ description: `${description.value}. Full bookkeeping (KPiR & Commercial Books), VAT/PIT/CIT filings, HR and payroll, company registration assistance (S24, CIDG), and transport licensing support.` })
</script>
