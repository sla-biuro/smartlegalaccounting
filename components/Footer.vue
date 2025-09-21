<template>
  <footer class="mt-32 relative">
    <!-- Footer Background -->
    <div class="absolute inset-0 bg-gradient-to-t from-slate-100 via-white/50 to-transparent dark:from-gray-900 dark:via-gray-800/50 dark:to-transparent"></div>
    
    <div class="relative border-t border-brandBlue/20 bg-gradient-to-br from-white/80 via-slate-50/60 to-blue-50/40 dark:from-gray-900/80 dark:via-gray-800/60 dark:to-slate-800/40 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Company Info -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br from-brandBlue via-brandLightBlue to-brandYellow flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M3 13v-6a2 2 0 0 1 2-2h9v8" />
                  <path d="M13 13h6l2 3v3H20" />
                  <circle cx="7.5" cy="18.5" r="1.5" />
                  <circle cx="18.5" cy="18.5" r="1.5" />
                </svg>
              </div>
              <div class="text-xl font-bold gradient-text">{{ companyName }}</div>
            </div>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ footerData.about }}</p>
            
            <!-- Contact Info -->
            <div class="space-y-2 text-gray-700 dark:text-gray-300">
              <div class="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-0.5 text-brandBlue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ address }}</span>
              </div>
              <div class="flex items-center gap-4 flex-wrap">
                <a class="flex items-center gap-2 hover:text-brandBlue transition-colors" :href="'mailto:'+email">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {{ email }}
                </a>
                <a class="flex items-center gap-2 hover:text-brandBlue transition-colors" :href="'tel:'+phone">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {{ phone }}
                </a>
              </div>
              <div v-if="business.hours" class="flex items-center gap-2 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-brandBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ business.hours }}
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="flex gap-4 pt-2">
              <a v-if="footerData.social.facebook" :href="footerData.social.facebook" target="_blank" rel="noopener" aria-label="Facebook" 
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-brandBlue/20 to-brandBlue/10 hover:from-brandBlue hover:to-brandBlue/80 text-brandBlue hover:text-white transition-all duration-300 flex items-center justify-center">
                FB
              </a>
              <a v-if="footerData.social.linkedin" :href="footerData.social.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-brandBlue/20 to-brandBlue/10 hover:from-brandBlue hover:to-brandBlue/80 text-brandBlue hover:text-white transition-all duration-300 flex items-center justify-center">
                IN
              </a>
              <a v-if="footerData.social.x" :href="footerData.social.x" target="_blank" rel="noopener" aria-label="X"
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-brandBlue/20 to-brandBlue/10 hover:from-brandBlue hover:to-brandBlue/80 text-brandBlue hover:text-white transition-all duration-300 flex items-center justify-center">
                X
              </a>
              <a v-if="business.mapsUrl" :href="business.mapsUrl" target="_blank" rel="noopener" aria-label="Map"
                class="w-10 h-10 rounded-xl bg-gradient-to-br from-brandYellow/20 to-brandYellow/10 hover:from-brandYellow hover:to-yellow-500 text-brandYellow hover:text-white transition-all duration-300 flex items-center justify-center">
                📍
              </a>
            </div>
          </div>
          
          <!-- Legal Links -->
          <div>
            <h3 class="font-bold text-gray-900 dark:text-white mb-4 text-lg">Legal</h3>
            <ul class="space-y-3">
              <li v-for="(l, idx) in footerData.legalLinks" :key="idx">
                <NuxtLink class="text-gray-600 dark:text-gray-300 hover:text-brandBlue dark:hover:text-brandLightBlue transition-colors flex items-center gap-2" :to="l.url">
                  <div class="w-1.5 h-1.5 rounded-full bg-brandBlue/40"></div>
                  {{ l.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <!-- Company Details -->
          <div>
            <h3 class="font-bold text-gray-900 dark:text-white mb-4 text-lg">Company Details</h3>
            <div class="space-y-3 text-gray-600 dark:text-gray-300">
              <div v-if="business.taxIdNIP" class="flex items-center gap-2">
                <span class="text-xs bg-brandBlue/10 text-brandBlue px-2 py-1 rounded font-medium">NIP</span>
                <span>{{ business.taxIdNIP }}</span>
              </div>
              <div v-if="business.regon" class="flex items-center gap-2">
                <span class="text-xs bg-brandLightBlue/10 text-brandLightBlue px-2 py-1 rounded font-medium">REGON</span>
                <span>{{ business.regon }}</span>
              </div>
              <div v-if="business.krs" class="flex items-center gap-2">
                <span class="text-xs bg-brandYellow/20 text-yellow-700 px-2 py-1 rounded font-medium">KRS</span>
                <span>{{ business.krs }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="mt-12 pt-8 border-t border-brandBlue/10 text-center">
          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div>© {{ new Date().getFullYear() }} {{ companyName }}. All rights reserved.</div>
            <div class="text-xs">Designed with ❤️ for logistics excellence</div>
          </div>
        </div>
      </div>
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
