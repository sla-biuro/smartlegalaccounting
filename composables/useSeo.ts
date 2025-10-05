import { useHead, useRuntimeConfig, useRoute } from 'nuxt/app'
import { useCompany } from './useCompany'
import { computed } from 'vue'
import { normalizeDescription } from '../utils/seo'

type SeoOptions = {
  title?: string
  description?: string
  image?: string
  noindex?: boolean
}

export function useSeo() {
  const config = useRuntimeConfig()
  const route = useRoute()
  const siteUrl = (config.public?.siteUrl as string) || ''

  const canonical = computed(() => {
    const path = route.fullPath || route.path || '/'
    // avoid double slashes
    return siteUrl ? new URL(path, siteUrl).toString() : path
  })

  function setSeo(opts: SeoOptions) {
    const { hero, name, brand } = useCompany()
    const title = opts.title
  const description = normalizeDescription(opts.description || String(hero.value?.lead || hero.value?.subheadline || ''))
    const image = opts.image
    const noindex = !!opts.noindex

    useHead({
      title,
      meta: [
        description ? { name: 'description', content: description, key: 'description' } : {},
        noindex ? { name: 'robots', content: 'noindex,follow', key: 'robots' } : {},
        // Authors and keywords propagated to every page
        { name: 'keywords', content: 'accounting, księgowość, bookkeeping, KPiR, Commercial Books, VAT, PIT, CIT, HR, payroll, kadry i płace, company registration, S24, CIDG, transport management, licensing, certyfikat kompetencji zawodowych, SmartLegal Accounting, biuro rachunkowe', key: 'keywords' },
        { name: 'author', content: 'Vladyslav Dzhuha, Viacheslav Shevchenko', key: 'author' },
        { name: 'authors', content: 'Vladyslav Dzhuha, Viacheslav Shevchenko', key: 'authors' },
        // Open Graph
        title ? { property: 'og:title', content: title, key: 'og:title' } : {},
  (description || hero.value?.lead) ? { property: 'og:description', content: description, key: 'og:description' } : {},
        (image || brand.value?.logo) ? { property: 'og:image', content: image || String(brand.value?.logo || '/logo.png'), key: 'og:image' } : {},
        canonical.value ? { property: 'og:url', content: canonical.value, key: 'og:url' } : {},
        // Twitter
        title ? { name: 'twitter:title', content: title, key: 'twitter:title' } : {},
  (description || hero.value?.lead) ? { name: 'twitter:description', content: description, key: 'twitter:description' } : {},
        (image || brand.value?.logo) ? { name: 'twitter:image', content: image || String(brand.value?.logo || '/logo.png'), key: 'twitter:image' } : {},
      ].filter(Boolean) as any,
      link: [
        canonical.value ? { rel: 'canonical', href: canonical.value } : undefined,
      ].filter(Boolean) as any
    })
  }

  return { setSeo, canonical }
}
