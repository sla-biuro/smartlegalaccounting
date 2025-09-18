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
  const brand = computed(() => company.brand)

  const services = computed(() => ({
    accounting: pick(company.services.accounting, locale.value),
    hr: pick(company.services.hr, locale.value),
    company_registration_support: pick(company.services.company_registration_support, locale.value),
    transport_management: pick(company.services.transport_management, locale.value),
  }))

  const address = computed(() => pick(company.contact.address, locale.value))
  const email = computed(() => company.contact.email)
  const phone = computed(() => company.contact.phone)
  const business = computed(() => ({
    country: company.business?.country ?? '',
    taxIdNIP: company.business?.taxIdNIP ?? '',
    regon: company.business?.regon ?? '',
    krs: company.business?.krs ?? '',
    vatPayer: company.business?.vatPayer ?? false,
    hours: pick(company.business?.hours as any, locale.value),
    mapsUrl: company.business?.mapsUrl ?? ''
  }))

  const hero = computed(() => ({
    headline: pick(company.hero?.headline as any, locale.value),
    subheadline: pick(company.hero?.subheadline as any, locale.value),
    cta: {
      primary: { label: pick(company.hero?.cta?.primary.label as any, locale.value), to: company.hero?.cta?.primary.to ?? '#' },
      secondary: { label: pick(company.hero?.cta?.secondary.label as any, locale.value), to: company.hero?.cta?.secondary.to ?? '#' }
    }
  }))

  type NavItem = { to: string; label: { en: string; pl: string }; order?: number; emphasis?: boolean }
  const navigation = computed(() =>
    (company.navigation as NavItem[] | undefined)?.slice().sort((a, b) => (a.order ?? 0) - (b.order ?? 0)).map(item => ({
      to: item.to,
      label: pick(item.label, locale.value),
      emphasis: !!item.emphasis
    })) ?? []
  )

  const footer = computed(() => ({
    about: pick(company.footer?.about as any, locale.value),
    social: company.footer?.social ?? {},
    legalLinks: (company.footer?.legalLinks ?? []).map((l: any) => ({ label: pick(l.label, locale.value), url: l.url }))
  }))

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

  const features = computed(() => (company.features ?? []).map((f: any) => ({
    title: pick(f.title, locale.value),
    bullets: pick(f.bullets, locale.value) as string[]
  })))

  const pricing = computed(() => (company.pricing ?? []).map((p: any) => ({
    name: pick(p.name, locale.value),
    price: pick(p.price, locale.value),
    includes: pick(p.includes, locale.value) as string[]
  })))

  const faqs = computed(() => (company.faqs ?? []).map((f: any) => ({
    q: pick(f.q, locale.value),
    a: pick(f.a, locale.value)
  })))

  type UI = {
    nav: { getStarted: string }
    contact: {
      labels: { name: string; email: string; message: string }
      buttons: { send: string }
      toasts: {
        successTitle: string; successBody: string; errorTitle: string; errorBody: string; networkError: string
      }
    }
  }
  const ui = computed<UI>(() => ({
    nav: {
      getStarted: pick(company.ui?.nav?.getStarted as any, locale.value)
    },
    contact: {
      labels: {
        name: pick(company.ui?.contact?.labels?.name as any, locale.value),
        email: pick(company.ui?.contact?.labels?.email as any, locale.value),
        message: pick(company.ui?.contact?.labels?.message as any, locale.value)
      },
      buttons: {
        send: pick(company.ui?.contact?.buttons?.send as any, locale.value)
      },
      toasts: {
        successTitle: pick(company.ui?.contact?.toasts?.successTitle as any, locale.value),
        successBody: pick(company.ui?.contact?.toasts?.successBody as any, locale.value),
        errorTitle: pick(company.ui?.contact?.toasts?.errorTitle as any, locale.value),
        errorBody: pick(company.ui?.contact?.toasts?.errorBody as any, locale.value),
        networkError: pick(company.ui?.contact?.toasts?.networkError as any, locale.value)
      }
    }
  }))

  return { company, name, abbreviation, brand, services, address, email, phone, business, hero, navigation, footer, pages, getPage, features, pricing, faqs, ui }
}
