<template>
  <main class="max-w-5xl mx-auto py-16 px-6">
    <section class="text-center">
      <h1 class="text-4xl font-extrabold text-gray-900 dark:text-white">{{ hero.headline }}</h1>
  <p class="mt-2 text-gray-600 dark:text-gray-300">{{ hero.subheadline }}</p>
  <p class="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{{ hero.lead }}</p>
  <div class="mt-8 flex items-center justify-center gap-4">
        <NuxtLink :to="hero.cta.primary.to" class="px-5 py-3 bg-primary text-surface rounded-md">{{ hero.cta.primary.label }}</NuxtLink>
        <NuxtLink :to="hero.cta.secondary.to" class="px-5 py-3 border rounded-md">{{ hero.cta.secondary.label }}</NuxtLink>
      </div>
    </section>

    <section class="mt-16">
      <h2 class="text-2xl font-semibold">{{ companyServicesTitle }}</h2>
      <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-6 bg-white/60 rounded-lg shadow">
          <h3 class="font-semibold">{{ companyServices.accounting.title }}</h3>
          <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li v-for="(item, idx) in companyServices.accounting.items" :key="'acc-'+idx">{{ item }}</li>
          </ul>
        </div>
        <div class="p-6 bg-white/60 rounded-lg shadow">
          <h3 class="font-semibold">{{ companyServices.hr.title }}</h3>
          <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li v-for="(item, idx) in companyServices.hr.items" :key="'hr-'+idx">{{ item }}</li>
          </ul>
        </div>
        <div class="p-6 bg-white/60 rounded-lg shadow">
          <h3 class="font-semibold">{{ companyServices.company_registration_support.title }}</h3>
          <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li v-for="(item, idx) in companyServices.company_registration_support.items" :key="'reg-'+idx">{{ item }}</li>
          </ul>
        </div>
        <div class="p-6 bg-white/60 rounded-lg shadow">
          <h3 class="font-semibold">{{ companyServices.transport_management.title }}</h3>
          <ul class="mt-2 list-disc list-inside text-sm text-gray-700 space-y-1">
            <li v-for="(item, idx) in companyServices.transport_management.items" :key="'tm-'+idx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
  
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCompany } from '../../composables/useCompany'

const { hero: h, services, name, servicesTitle } = useCompany()
const hero = computed(() => h.value)
const companyServices = computed(() => services.value)
const companyServicesTitle = computed(() => servicesTitle.value)
useHead(() => ({ title: `${hero.value.headline} – ${name.value}`, meta: [ { name: 'description', content: String(hero.value.subheadline || '') } ] }))
</script>
