<template>
  <main class="max-w-4xl mx-auto py-16 px-6">
    <h1 class="text-3xl font-bold mb-6">{{ title }}</h1>
    <div class="prose dark:prose-invert">
      <p>{{ intro }}</p>
      <h2>{{ scope }}</h2>
      <p>{{ scopeBody }}</p>
      <h2>{{ servicesHeader }}</h2>
      <p>{{ servicesBody }}</p>
      <h2>{{ liability }}</h2>
      <p>{{ liabilityBody }}</p>
      <h2>{{ termination }}</h2>
      <p>{{ terminationBody }}</p>
      <h2>{{ contactHeader }}</h2>
      <p>
        <template v-if="locale === 'pl'">W sprawach dotyczących regulaminu prosimy pisać na:</template>
        <template v-else>For terms-related matters please contact:</template>
        <a class="underline" :href="'mailto:'+email">{{ email }}</a>
      </p>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useLocale } from '../../../composables/useLocale'
import { useCompany } from '../../../composables/useCompany'
import { useSeo } from '../../../composables/useSeo'

const { locale } = useLocale()

const title = computed(() => locale.value === 'pl' ? 'Regulamin' : 'Terms of Service')

const intro = computed(() => locale.value === 'pl'
  ? 'Niniejszy regulamin określa zasady korzystania z usług SmartLegal Accounting Sp. z o.o.'
  : 'These Terms of Service define the rules for using SmartLegal Accounting Sp. z o.o. services.'
)

const scope = computed(() => locale.value === 'pl' ? 'Zakres usług' : 'Scope of services')
const scopeBody = computed(() => locale.value === 'pl'
  ? 'Świadczymy usługi księgowe, kadrowe i wsparcie transportowe zgodnie z umową zawartą z klientem.'
  : 'We provide accounting, HR, and transport support services as agreed with the client.'
)

const servicesHeader = computed(() => locale.value === 'pl' ? 'Zasady świadczenia usług' : 'Service terms')
const servicesBody = computed(() => locale.value === 'pl'
  ? 'Szczegóły zakresu usług, terminów i opłat ustalane są indywidualnie i opisane w umowie.'
  : 'Service scope, timelines, and fees are agreed individually and described in the contract.'
)

const liability = computed(() => locale.value === 'pl' ? 'Odpowiedzialność' : 'Liability')
const liabilityBody = computed(() => locale.value === 'pl'
  ? 'SmartLegal Accounting nie ponosi odpowiedzialności za szkody wynikające z nieprawdziwych informacji dostarczonych przez klienta.'
  : 'SmartLegal Accounting is not liable for damages resulting from false information provided by the client.'
)

const termination = computed(() => locale.value === 'pl' ? 'Rozwiązanie umowy' : 'Termination')
const terminationBody = computed(() => locale.value === 'pl'
  ? 'Umowę można rozwiązać z zachowaniem warunków określonych w umowie i obowiązujących przepisach prawa.'
  : 'A contract may be terminated subject to the terms set out in the agreement and applicable law.'
)

const contactHeader = computed(() => locale.value === 'pl' ? 'Kontakt' : 'Contact')
const { email } = useCompany()

const { setSeo } = useSeo()
setSeo({ description: String(intro.value) + ' Read about scope of services, responsibilities, limitations of liability, and termination terms for our accounting and transport support services.' })
</script>
