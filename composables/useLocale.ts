import { ref, computed, watch } from 'vue'

export type Locale = 'en' | 'pl'

const STORAGE_KEY = 'locale'

let state: ReturnType<typeof createState> | null = null

function createState() {
  const initial: Locale = (process.client ? (localStorage.getItem(STORAGE_KEY) as Locale) : 'en') || 'en'
  const locale = ref<Locale>(initial)

  if (process.client) {
    watch(locale, (val) => localStorage.setItem(STORAGE_KEY, val), { immediate: true })
  }

  const isEn = computed(() => locale.value === 'en')
  const isPl = computed(() => locale.value === 'pl')

  function setLocale(l: Locale) {
    locale.value = l
  }

  function toggle() {
    locale.value = locale.value === 'en' ? 'pl' : 'en'
  }

  return { locale, isEn, isPl, setLocale, toggle }
}

export function useLocale() {
  if (!state) state = createState()
  return state
}
