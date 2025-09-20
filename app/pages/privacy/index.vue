<template>
  <main class="max-w-4xl mx-auto py-16 px-6">
    <h1 class="text-3xl font-bold mb-6">{{ title }}</h1>
    <div class="prose dark:prose-invert">
      <p>{{ intro }}</p>
      <h2>{{ what }}</h2>
      <p>{{ whatBody }}</p>
      <h2>{{ useData }}</h2>
      <p>{{ useDataBody }}</p>
      <h2>{{ rights }}</h2>
      <p>{{ rightsBody }}</p>
      <h2>{{ contactHeader }}</h2>
      <p>
        <template v-if="locale === 'pl'">W sprawach dotyczących danych prosimy pisać na:</template>
        <template v-else>For data matters please email:</template>
        <a class="underline" :href="'mailto:'+email">{{ email }}</a>
      </p>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useLocale } from '../../../composables/useLocale'
import { useCompany } from '../../../composables/useCompany'

const { locale } = useLocale()

const title = computed(() => locale.value === 'pl' ? 'Polityka prywatności' : 'Privacy Policy')

const intro = computed(() => locale.value === 'pl'
  ? 'Niniejsza Polityka Prywatności określa zasady przetwarzania danych osobowych przez SmartLegal Accounting Sp. z o.o. oraz prawa osób, których dane dotyczą.'
  : 'This Privacy Policy explains how SmartLegal Accounting Sp. z o.o. processes personal data and the rights of data subjects.'
)

const what = computed(() => locale.value === 'pl' ? 'Jakie dane zbieramy' : 'What data we collect')
const whatBody = computed(() => locale.value === 'pl'
  ? 'Zbieramy dane kontaktowe (np. imię, adres e-mail, numer telefonu) przekazane w formularzu kontaktowym oraz dane nieosobowe zbierane automatycznie (np. pliki cookie, dane analityczne).' 
  : 'We collect contact data (e.g. name, email address, phone number) provided via the contact form and non-personal data collected automatically (e.g. cookies, analytics).'
)

const useData = computed(() => locale.value === 'pl' ? 'Wykorzystanie danych' : 'How we use data')
const useDataBody = computed(() => locale.value === 'pl'
  ? 'Dane przetwarzamy w celu obsługi zapytań klientów, realizacji usług księgowych, komunikacji marketingowej (jeśli użytkownik wyraził zgodę) oraz w celach prawnych i rozliczeniowych.'
  : 'We process data to handle client inquiries, provide accounting services, communicate marketing messages (if consented), and for legal and billing purposes.'
)

const rights = computed(() => locale.value === 'pl' ? 'Prawa osób' : 'Your rights')
const rightsBody = computed(() => locale.value === 'pl'
  ? 'Osoby mają prawo do żądania dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania oraz przenoszenia danych. W sprawach dotyczących ochrony prywatności prosimy o kontakt.'
  : 'You have the right to request access to, correction, deletion, restriction of processing, and data portability. For privacy concerns please contact us.'
)

const contactHeader = computed(() => locale.value === 'pl' ? 'Kontakt' : 'Contact')
const { email } = useCompany()
</script>
