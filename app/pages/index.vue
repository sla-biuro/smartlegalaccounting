<template>
  <div>
  <!-- Hero Section with Background -->
  <section class="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-400/15 to-cyan-400/20"></div>
      <img src="/hero-bg.svg" alt="" class="w-full h-full object-cover opacity-50" />
      <div class="absolute inset-0 bg-gradient-to-t from-cyan-200/20 via-transparent to-purple-100/15"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <div class="backdrop-blur-sm bg-gradient-to-br from-white/20 via-blue-50/30 to-purple-50/20 rounded-3xl p-12 border border-blue-200/30 shadow-2xl">
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6">
          <span class="gradient-text">{{ hero.headline }}</span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-800 dark:text-blue-200 mb-4 font-medium">{{ hero.subheadline }}</p>
        <p class="text-lg text-slate-700 dark:text-cyan-300 max-w-4xl mx-auto mb-10 leading-relaxed">{{ hero.lead }}</p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
          <NuxtLink :to="hero.cta.primary.to" class="btn-gradient text-lg px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
            {{ hero.cta.primary.label }}
          </NuxtLink>
          <NuxtLink :to="hero.cta.secondary.to" class="btn-outline text-lg px-8 py-4 rounded-xl font-semibold border-2 backdrop-blur-sm">
            {{ hero.cta.secondary.label }}
          </NuxtLink>
        </div>
        
        <!-- Feature highlights -->
        <div class="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-700 dark:text-cyan-300">
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-gradient-to-r from-brandBlue to-brandYellow"></div>
            <span>{{ t.features.professional }}</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-gradient-to-r from-brandBlue to-brandYellow"></div>
            <span>{{ t.features.support }}</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-gradient-to-r from-brandBlue to-brandYellow"></div>
            <span>{{ t.features.trusted }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <main class="max-w-6xl mx-auto py-20 px-6">

    <!-- Services Section -->
    <section class="mt-24">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold gradient-text mb-4">{{ t.services.title }}</h2>
        <p class="text-xl text-slate-700 dark:text-blue-300 max-w-2xl mx-auto">{{ t.services.description }}</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <!-- Accounting Service -->
        <div class="group hover:scale-[1.02] transition-all duration-300 p-8 relative overflow-hidden rounded-2xl border border-blue-300/40 bg-gradient-to-br from-blue-50/90 via-indigo-100/80 to-purple-100/70 dark:border-blue-400/40 dark:from-blue-900/60 dark:via-indigo-800/50 dark:to-purple-800/40 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:border-blue-400/60">
          <div class="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <img src="/accounting-service.svg" alt="" class="w-full h-full object-contain" />
          </div>
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-yellow-300 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-cyan-100">{{ companyServices.accounting.title }}</h3>
            </div>
            <ul class="space-y-3">
              <li v-for="(item, idx) in companyServices.accounting.items" :key="'acc-'+idx" class="flex items-start gap-3 text-slate-700 dark:text-blue-200">
                <div class="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-2 flex-shrink-0"></div>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- HR Service -->
        <div class="group hover:scale-[1.02] transition-all duration-300 p-8 relative overflow-hidden rounded-2xl border border-emerald-300/40 bg-gradient-to-br from-emerald-50/90 via-teal-100/80 to-cyan-100/70 dark:border-emerald-400/40 dark:from-emerald-900/60 dark:via-teal-800/50 dark:to-cyan-800/40 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:border-emerald-400/60">
          <div class="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <img src="/hr-service.svg" alt="" class="w-full h-full object-contain" />
          </div>
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-cyan-100">{{ companyServices.hr.title }}</h3>
            </div>
            <ul class="space-y-3">
              <li v-for="(item, idx) in companyServices.hr.items" :key="'hr-'+idx" class="flex items-start gap-3 text-slate-700 dark:text-blue-200">
                <div class="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mt-2 flex-shrink-0"></div>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Company Registration Support -->
        <div class="group hover:scale-[1.02] transition-all duration-300 p-8 relative overflow-hidden rounded-2xl border border-purple-300/40 bg-gradient-to-br from-purple-50/90 via-violet-100/80 to-fuchsia-100/70 dark:border-purple-400/40 dark:from-purple-900/60 dark:via-violet-800/50 dark:to-fuchsia-800/40 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:border-purple-400/60">
          <div class="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <img src="/accounting-service.svg" alt="" class="w-full h-full object-contain" />
          </div>
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center text-cyan-300 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-cyan-100">{{ companyServices.company_registration_support.title }}</h3>
            </div>
            <ul class="space-y-3">
              <li v-for="(item, idx) in companyServices.company_registration_support.items" :key="'reg-'+idx" class="flex items-start gap-3 text-slate-700 dark:text-blue-200">
                <div class="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 mt-2 flex-shrink-0"></div>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Transport Management -->
        <div class="group hover:scale-[1.02] transition-all duration-300 p-8 relative overflow-hidden rounded-2xl border border-indigo-300/40 bg-gradient-to-br from-indigo-50/90 via-blue-100/80 to-sky-100/70 dark:border-indigo-400/40 dark:from-indigo-900/60 dark:via-blue-800/50 dark:to-sky-800/40 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:border-indigo-400/60">
          <div class="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
            <img src="/truck-service.svg" alt="" class="w-full h-full object-contain" />
          </div>
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-cyan-100">{{ companyServices.transport_management.title }}</h3>
            </div>
            <ul class="space-y-3">
              <li v-for="(item, idx) in companyServices.transport_management.items" :key="'tm-'+idx" class="flex items-start gap-3 text-slate-700 dark:text-blue-200">
                <div class="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 mt-2 flex-shrink-0"></div>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Values Section -->
    <section class="mt-32 relative">
      <div class="absolute inset-0 bg-gradient-to-r from-violet-400/10 via-blue-300/8 to-cyan-400/12 rounded-3xl"></div>
      <div class="relative p-12 text-center">
        <h2 class="text-4xl font-bold gradient-text mb-6">{{ t.companyValues.title }}</h2>
        <p class="text-xl text-slate-700 dark:text-blue-300 max-w-3xl mx-auto mb-12">
          {{ t.companyValues.subtitle }}
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brandBlue to-brandLightBlue flex items-center justify-center text-yellow-400 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-cyan-100 mb-2">{{ t.companyValues.fast.title }}</h3>
            <p class="text-slate-700 dark:text-blue-300">{{ t.companyValues.fast.description }}</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-cyan-100 mb-2">{{ t.companyValues.trusted.title }}</h3>
            <p class="text-slate-700 dark:text-blue-300">{{ t.companyValues.trusted.description }}</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-yellow-200 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-cyan-100 mb-2">{{ t.companyValues.personal.title }}</h3>
            <p class="text-slate-700 dark:text-blue-300">{{ t.companyValues.personal.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCompany } from '../../composables/useCompany'
import { useSeo } from '../../composables/useSeo'
import { useTexts } from '../../data/texts'

const { hero, services: companyServices, servicesTitle, name: companyName } = useCompany()
const { t } = useTexts()
const companyServicesTitle = computed(() => servicesTitle.value)

const { setSeo } = useSeo()
setSeo({ description: String((hero.value.lead || hero.value.subheadline) + ' Explore accounting, HR & payroll, company registration support, and transport management services tailored for your business.') })
</script>
