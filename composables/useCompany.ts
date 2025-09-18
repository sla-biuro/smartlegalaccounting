import info from '../information.json'
import { computed } from 'vue'
import { useLocale, type Locale } from './useLocale'

type Localized<T = string> = { en: T; pl: T }

type CompanyInfo = typeof info.company

function pick<T>(obj: Localized<T>, locale: Locale): T {
  return obj?.[locale] ?? (obj?.en as T)
}

export function useCompany() {
  const { locale } = useLocale()

  const company = info.company as CompanyInfo

  const name = computed(() => pick(company.name, locale.value))
  const abbreviation = computed(() => pick(company.abbreviation, locale.value))

  const services = computed(() => ({
    accounting: pick(company.services.accounting, locale.value),
    hr: pick(company.services.hr, locale.value),
    company_registration_support: pick(company.services.company_registration_support, locale.value),
    transport_management: pick(company.services.transport_management, locale.value),
  }))

  const address = computed(() => pick(company.contact.address, locale.value))
  const email = computed(() => company.contact.email)
  const phone = computed(() => company.contact.phone)

  type Page = CompanyInfo['pages'][number]
  const pages = computed(() => company.pages.map((p: Page) => ({
    name: pick(p.name, locale.value),
    content: pick(p.content, locale.value),
  })))

  function getPage(nameEn: string) {
    // find page by English name key, return localized content
    const p = company.pages.find((p: Page) => p.name.en.toLowerCase() === nameEn.toLowerCase())
    if (!p) return null
    return { name: pick(p.name, locale.value), content: pick(p.content, locale.value) }
  }

  return { company, name, abbreviation, services, address, email, phone, pages, getPage }
}
