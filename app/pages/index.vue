<template>
  <main class="max-w-5xl mx-auto py-16 px-6">
    <section class="text-center">
      <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white">{{ companyName }}</h1>
      <p class="mt-2 text-gray-600 dark:text-gray-300">{{ homePage?.content }}</p>
      <div class="mt-8 flex items-center justify-center gap-4">
        <NuxtLink to="/contact" class="px-5 py-3 bg-primary text-surface rounded-md">{{ t.hero.ctaPrimary }}</NuxtLink>
        <NuxtLink to="/features" class="px-5 py-3 border rounded-md">{{ t.hero.ctaSecondary }}</NuxtLink>
      </div>
    </section>

    <section class="mt-16">
      <h2 class="text-2xl font-semibold">{{ t.services.title }}</h2>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-6 bg-white/60 rounded-lg shadow">
          <h3 class="font-semibold">Accounting</h3>
          <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li v-for="(item, idx) in companyServices.accounting" :key="'acc-'+idx">{{ item }}</li>
          </ul>
        </div>
        <div class="p-6 bg-white/60 rounded-lg shadow">
          <h3 class="font-semibold">HR</h3>
          <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li v-for="(item, idx) in companyServices.hr" :key="'hr-'+idx">{{ item }}</li>
          </ul>
        </div>
        <div class="p-6 bg-white/60 rounded-lg shadow">
          <h3 class="font-semibold">Company registration</h3>
          <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li v-for="(item, idx) in companyServices.company_registration_support" :key="'reg-'+idx">{{ item }}</li>
          </ul>
        </div>
        <div class="p-6 bg-white/60 rounded-lg shadow">
          <h3 class="font-semibold">Transport management</h3>
          <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li v-for="(item, idx) in companyServices.transport_management" :key="'tm-'+idx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
  
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCompany } from '../../composables/useCompany'
import { useTexts } from '../../data/texts'

const { name, services, getPage } = useCompany()
const companyName = computed(() => name.value)
const companyServices = computed(() => services.value)
const homePage = computed(() => getPage('Home'))

const { t } = useTexts()
</script>
