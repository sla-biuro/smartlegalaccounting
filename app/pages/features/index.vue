<template>
  <main class="max-w-4xl mx-auto py-20 px-4">
    <h1 class="text-3xl font-bold mb-6">{{ pageTitle }}</h1>
    <div class="space-y-6">
      <div class="p-6 bg-white/60 rounded-lg shadow">
        <h2 class="font-semibold text-lg">{{ companyServices.accounting.title }}</h2>
        <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
          <li v-for="(b, j) in companyServices.accounting.items" :key="j">{{ b }}</li>
        </ul>
      </div>

      <div class="p-6 bg-white/60 rounded-lg shadow">
        <h2 class="font-semibold text-lg">{{ companyServices.hr.title }}</h2>
        <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
          <li v-for="(b, j) in companyServices.hr.items" :key="j">{{ b }}</li>
        </ul>
      </div>

      <div class="p-6 bg-white/60 rounded-lg shadow">
        <h2 class="font-semibold text-lg">{{ companyServices.company_registration_support.title }}</h2>
        <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
          <li v-for="(b, j) in companyServices.company_registration_support.items" :key="j">{{ b }}</li>
        </ul>
      </div>

      <div class="p-6 bg-white/60 rounded-lg shadow">
        <h2 class="font-semibold text-lg">{{ companyServices.transport_management.title }}</h2>
        <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
          <li v-for="(b, j) in companyServices.transport_management.items" :key="j">{{ b }}</li>
        </ul>
      </div>
    </div>
  </main>
  
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
