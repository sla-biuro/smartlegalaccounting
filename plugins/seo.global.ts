import { defineNuxtPlugin, useHead, useRuntimeConfig } from 'nuxt/app'
import { useCompany } from '../composables/useCompany'
import { useLocale } from '../composables/useLocale'
import { normalizeDescription } from '../utils/seo'

export default defineNuxtPlugin(() => {
  const { name, hero, brand } = useCompany()
  const { locale } = useLocale()
  const config = useRuntimeConfig()

  const siteUrl = (config.public?.siteUrl as string) || ''
  const defaultTitle = name.value || 'Site'
  const defaultDescription =
    (hero.value?.lead as string) ||
    'SmartLegal Accounting Sp. z o.o. provides comprehensive services for businesses: bookkeeping (KPiR & Commercial Books), tax declarations (VAT, PIT, CIT), HR & payroll, company registration support (S24, CIDG), and transport management including professional competence certificate and licensing assistance.'
  const normalizedDescription = normalizeDescription(defaultDescription)
  const keywords = [
    'accounting', 'księgowość', 'bookkeeping', 'KPiR', 'Commercial Books', 'VAT', 'PIT', 'CIT',
    'HR', 'payroll', 'kadry i płace', 'company registration', 'S24', 'CIDG',
    'transport management', 'licensing', 'certyfikat kompetencji zawodowych',
    'SmartLegal Accounting', 'biuro rachunkowe', 'Żwirki i Wigury'
  ].join(', ')
  // Use absolute URL for images (required for Google Search and social media)
  const logoUrl = brand.value?.logo || '/logo.png'
  const defaultImage = logoUrl.startsWith('http') ? logoUrl : `${siteUrl || 'https://smartlegalacc.com'}${logoUrl}`

  useHead({
    title: defaultTitle,
    meta: [
      { name: 'description', content: normalizedDescription, key: 'description' },
      { name: 'keywords', content: keywords, key: 'keywords' },
      { name: 'author', content: 'Vladyslav Dzhuha, Viacheslav Shevchenko', key: 'author' },
      { name: 'authors', content: 'Vladyslav Dzhuha, Viacheslav Shevchenko', key: 'authors' },
      // Open Graph defaults
      { property: 'og:site_name', content: defaultTitle, key: 'og:site_name' },
      { property: 'og:title', content: defaultTitle, key: 'og:title' },
  { property: 'og:description', content: normalizedDescription, key: 'og:description' },
      { property: 'og:image', content: defaultImage, key: 'og:image' },
      siteUrl ? { property: 'og:url', content: siteUrl, key: 'og:url' } : (undefined as any),
      // Twitter
      { name: 'twitter:title', content: defaultTitle, key: 'twitter:title' },
  { name: 'twitter:description', content: normalizedDescription, key: 'twitter:description' },
      { name: 'twitter:image', content: defaultImage, key: 'twitter:image' }
    ].filter(Boolean) as any
  })
})
