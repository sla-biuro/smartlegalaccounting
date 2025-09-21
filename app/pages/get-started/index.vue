<template>
  <main class="max-w-4xl mx-auto py-20 px-4">
    <h1 class="text-3xl font-bold mb-4">{{ pageTitle }}</h1>
    <p class="text-gray-600">A quick getting-started guide or signup flow will go here.</p>
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
