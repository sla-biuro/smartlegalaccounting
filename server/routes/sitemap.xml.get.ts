import { defineEventHandler } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const siteUrl: string = (config.public?.siteUrl as string) || ''

  // Known routes in this site
  const routes = [
    { path: '/', changefreq: 'weekly', priority: 1.0 },
    { path: '/features', changefreq: 'weekly', priority: 0.8 },
    { path: '/pricing', changefreq: 'weekly', priority: 0.6 },
    { path: '/contact', changefreq: 'weekly', priority: 0.6 },
    { path: '/privacy', changefreq: 'yearly', priority: 0.3 },
    { path: '/terms', changefreq: 'yearly', priority: 0.3 },
    { path: '/get-started', changefreq: 'monthly', priority: 0.5 },
  ]

  const lastmod = new Date().toISOString()

  function abs(u: string) {
    try { return new URL(u, siteUrl).toString() } catch { return u }
  }

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map(r => `  <url><loc>${abs(r.path)}</loc><lastmod>${lastmod}</lastmod><changefreq>${r.changefreq}</changefreq><priority>${r.priority}</priority></url>`),
    '</urlset>'
  ].join('\n')

  event.node.res.setHeader('Content-Type', 'application/xml; charset=UTF-8')
  return body
})
