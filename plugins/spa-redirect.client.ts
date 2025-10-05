// Handle GitHub Pages SPA redirect from 404.html
export default defineNuxtPlugin(() => {
  // Only run on client side
  if (typeof window === 'undefined') return

  const redirect = sessionStorage.getItem('redirect')
  
  if (redirect && redirect !== window.location.href) {
    // Clear the redirect IMMEDIATELY to prevent loops
    sessionStorage.removeItem('redirect')
    
    try {
      const url = new URL(redirect)
      const currentUrl = new URL(window.location.href)
      
      // Only redirect if it's a path on the same origin AND different from current path
      if (url.origin === currentUrl.origin && 
          url.pathname !== currentUrl.pathname && 
          url.pathname !== '/' && 
          url.pathname !== '/404.html') {
        
        // Use router to navigate (preserves Nuxt state)
        const router = useRouter()
        
        // Add a small delay to ensure sessionStorage is cleared
        setTimeout(() => {
          router.replace(url.pathname + url.search + url.hash)
        }, 100)
      }
    } catch (e) {
      // Invalid URL, ignore
      console.warn('Invalid redirect URL:', redirect)
    }
  }
})
