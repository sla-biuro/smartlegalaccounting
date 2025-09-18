<template>
  <main class="max-w-4xl mx-auto py-20 px-4">
  <h1 class="text-3xl font-bold mb-4">Contact</h1>
    <div class="mb-6 text-gray-700">
      <div class="font-medium">{{ companyName }}</div>
      <div>{{ address }}</div>
      <div><a class="underline" :href="'mailto:'+email">{{ email }}</a> · <a class="underline" :href="'tel:'+phone">{{ phone }}</a></div>
    </div>
    <section class="border border-gray-300 rounded-lg p-6 bg-white/60">
      <form @submit.prevent="onSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">{{ ui.labels.name }}</label>
          <input v-model="form.name" type="text" name="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary/60 focus:border-primary" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">{{ ui.labels.email }}</label>
          <input v-model="form.email" type="email" name="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary/60 focus:border-primary" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">{{ ui.labels.message }}</label>
          <textarea v-model="form.message" name="message" rows="5" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-primary/60 focus:border-primary"></textarea>
        </div>

        <div class="flex items-center gap-3">
          <button :disabled="sending" type="submit" class="inline-flex items-center px-4 py-2 bg-primary text-surface rounded-md disabled:opacity-60">
            <span v-if="!sending">{{ ui.buttons.send }}</span>
            <span v-else>...</span>
          </button>
        </div>
      </form>
    </section>

    <!-- Toast popup -->
    <transition name="toast-fade">
      <div v-if="toast.show" :class="['fixed right-4 top-6 z-50 w-80 rounded-md shadow-lg overflow-hidden', toast.type === 'success' ? 'bg-green-600' : 'bg-red-600']">
        <div class="p-3 text-white flex items-start gap-3">
          <div class="flex-1 text-sm">
            <div class="font-medium">{{ toast.type === 'success' ? ui.toasts.successTitle : ui.toasts.errorTitle }}</div>
            <div class="mt-1">{{ toast.message }}</div>
          </div>
          <button @click="hideToast" aria-label="Close" class="text-white/90 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import type { EmailFormData } from '../../../types/email'
import EmailFormDataModel from '../../../types/email'
import { useCompany } from '../../../composables/useCompany'

const form = reactive<EmailFormData>(new EmailFormDataModel())
const sending = ref(false)
const error = ref('')

const toast = reactive({ show: false, type: 'success' as 'success' | 'error', message: '' })
let toastTimer: ReturnType<typeof setTimeout> | null = null

const { name, address: addr, email: eml, phone: tel, ui: uiComp } = useCompany()
const companyName = name
const address = addr
const email = eml
const phone = tel
const ui = computed(() => uiComp.value.contact)
useHead(() => ({ title: `Contact – ${companyName.value}` }))

async function onSubmit() {
  error.value = ''
  sending.value = true

  const endpoint = 'https://formspree.io/f/xeolqjlb'

  try {
    const resp = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
    })

    if (resp.ok) {
      // reset using model semantics
      const model = new EmailFormDataModel()
      form.name = model.name
      form.email = model.email
      form.message = model.message
  showToast('success', ui.value.toasts.successBody)
    } else {
      const data = await resp.json().catch(() => ({}))
  const msg = (data && data.error) || ui.value.toasts.errorBody
      error.value = msg
      showToast('error', msg)
    }
  } catch (err) {
  const msg = ui.value.toasts.networkError
    error.value = msg
    showToast('error', msg)
  } finally {
    sending.value = false
  }
}

function showToast(type: 'success' | 'error', message: string) {
  toast.type = type
  toast.message = message
  toast.show = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => { toast.show = false; toastTimer = null }, 4000)
}

function hideToast() {
  toast.show = false
  if (toastTimer) { clearTimeout(toastTimer); toastTimer = null }
}
</script>

<style scoped>
/* Toast transition: slide down + fade + slight scale */
.toast-fade-enter-from,
.toast-fade-leave-to {
  transform: translateY(-8px) scale(0.98);
  opacity: 0;
}
.toast-fade-enter-active,
.toast-fade-leave-active {
  transition: transform 220ms cubic-bezier(.2,.8,.2,1), opacity 220ms cubic-bezier(.2,.8,.2,1);
}
.toast-fade-enter-to,
.toast-fade-leave-from {
  transform: translateY(0) scale(1);
  opacity: 1;
}

/* small shadow and improved focus for accessibility */
.toast-fade-enter-active {
  will-change: transform, opacity;
}

</style>
