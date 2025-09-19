<template>
  <footer class="mt-20 border-t border-gray-200/60 dark:border-gray-800/60">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
      <div>
        <div class="text-lg font-semibold">{{ companyName }}</div>
        <p class="mt-2 text-gray-600 dark:text-gray-300">{{ footerData.about }}</p>
        <div class="mt-3 text-gray-600 dark:text-gray-300">
          <div>{{ address }}</div>
          <div><a class="underline" :href="'mailto:'+email">{{ email }}</a> · <a class="underline" :href="'tel:'+phone">{{ phone }}</a></div>
          <div v-if="business.hours">{{ business.hours }}</div>
        </div>
        <div class="mt-4 flex gap-3">
          <a v-if="footerData.social.facebook" :href="footerData.social.facebook" target="_blank" rel="noopener" aria-label="Facebook" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">FB</a>
          <a v-if="footerData.social.linkedin" :href="footerData.social.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">IN</a>
          <a v-if="footerData.social.x" :href="footerData.social.x" target="_blank" rel="noopener" aria-label="X" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">X</a>
          <a v-if="business.mapsUrl" :href="business.mapsUrl" target="_blank" rel="noopener" aria-label="Map" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Map</a>
        </div>
      </div>
      <div>
        <div class="font-semibold mb-2">Legal</div>
        <ul class="space-y-1">
          <li v-for="(l, idx) in footerData.legalLinks" :key="idx"><NuxtLink class="hover:underline" :to="l.url">{{ l.label }}</NuxtLink></li>
        </ul>
      </div>
      <div>
        <div class="font-semibold mb-2">Company</div>
        <ul class="text-gray-600 dark:text-gray-300 space-y-1">
          <li v-if="business.taxIdNIP">NIP: {{ business.taxIdNIP }}</li>
          <li v-if="business.regon">REGON: {{ business.regon }}</li>
          <li v-if="business.krs">KRS: {{ business.krs }}</li>
        </ul>
      </div>
    </div>
    <div class="border-t border-gray-200/60 dark:border-gray-800/60 py-4 text-center text-xs text-gray-500">
      © {{ new Date().getFullYear() }} {{ companyName }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCompany } from '../composables/useCompany'

const { name, footer, address: addr, email: eml, phone: tel, business: biz } = useCompany()
const companyName = computed(() => name.value)
const footerData = computed(() => footer.value)
const address = computed(() => addr.value)
const email = computed(() => eml.value)
const phone = computed(() => tel.value)
const business = computed(() => biz.value)
</script>
