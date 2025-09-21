import { computed } from 'vue'
import { useLocale } from '../composables/useLocale'

export function useTexts() {
  const { locale } = useLocale()

  const t = computed(() => {
    const l = locale.value
    const dict = {
      nav: {
        home: { en: 'Home', pl: 'Strona główna' },
        features: { en: 'Features', pl: 'Funkcje' },
        pricing: { en: 'Pricing', pl: 'Cennik' },
        contact: { en: 'Contact', pl: 'Kontakt' },
        getStarted: { en: 'Get Started', pl: 'Zaczynamy' },
      },
      hero: {
        headline: {
          en: 'Smart accounting and transport support',
          pl: 'Sprytna księgowość i wsparcie transportu',
        },
        sub: {
          en: 'Professional services for companies: accounting, HR, registration and transport management.',
          pl: 'Profesjonalne usługi dla firm: księgowość, kadry, rejestracja i zarządzanie transportem.',
        },
        ctaPrimary: { en: 'Contact Us', pl: 'Skontaktuj się' },
        ctaSecondary: { en: 'See Services', pl: 'Zobacz usługi' }
      },
      contact: {
        title: { en: 'Contact Us', pl: 'Kontakt' },
        name: { en: 'Name', pl: 'Imię i nazwisko' },
        email: { en: 'Email', pl: 'Email' },
        message: { en: 'Message', pl: 'Wiadomość' },
        send: { en: 'Send', pl: 'Wyślij' },
        sending: { en: 'Sending...', pl: 'Wysyłanie...' },
        toastSuccessTitle: { en: 'Message sent', pl: 'Wiadomość wysłana' },
        toastSuccessBody: { en: 'Thanks — your message has been sent.', pl: 'Dziękujemy — wiadomość została wysłana.' },
        toastErrorTitle: { en: 'Error', pl: 'Błąd' },
        toastErrorBody: { en: 'Failed to send message. Please try again later.', pl: 'Nie udało się wysłać wiadomości. Spróbuj ponownie później.' },
        toastNetworkError: { en: 'Network error. Please try again.', pl: 'Błąd sieci. Spróbuj ponownie.' }
      },
      services: {
        title: { en: 'Our Services', pl: 'Nasze usługi' },
        description: { en: 'Comprehensive solutions to streamline your business operations', pl: 'Kompleksowe rozwiązania usprawniające działanie Twojej firmy' }
      },
      companyValues: {
        title: { en: 'Why Choose Our Company?', pl: 'Dlaczego wybrać naszą firmę?' },
        subtitle: { en: 'We combine years of expertise with modern technology to deliver exceptional logistics and business support services', pl: 'Łączymy lata doświadczenia z nowoczesną technologią, aby dostarczać wyjątkowe usługi logistyczne i wsparcia biznesowego' },
        fast: {
          title: { en: 'Fast & Reliable', pl: 'Szybko i niezawodnie' },
          description: { en: 'Quick turnaround times and dependable service you can trust', pl: 'Szybkie terminy realizacji i niezawodna usługa, której możesz zaufać' }
        },
        trusted: {
          title: { en: 'Trusted Partner', pl: 'Zaufany partner' },
          description: { en: 'Years of experience serving clients across various industries', pl: 'Lata doświadczenia w obsłudze klientów z różnych branż' }
        },
        personal: {
          title: { en: 'Personal Touch', pl: 'Indywidualne podejście' },
          description: { en: 'Dedicated support with personalized solutions for your needs', pl: 'Dedykowane wsparcie z personalizowanymi rozwiązaniami dla Twoich potrzeb' }
        }
      },
      features: {
        professional: { en: 'Professional Service', pl: 'Profesjonalna obsługa' },
        support: { en: '24/7 Support', pl: 'Wsparcie 24/7' },
        trusted: { en: 'Trusted Partner', pl: 'Zaufany partner' }
      },
      pricingPage: {
        title: { en: 'Pricing', pl: 'Cennik' }
      },
      language: {
        en: { en: 'English', pl: 'Angielski' },
        pl: { en: 'Polish', pl: 'Polski' }
      }
    }

    function pick(node: any) { return (node?.[l] ?? node?.en) as string }

    return {
      nav: {
        home: pick(dict.nav.home),
        features: pick(dict.nav.features),
        pricing: pick(dict.nav.pricing),
        contact: pick(dict.nav.contact),
        getStarted: pick(dict.nav.getStarted),
      },
      hero: {
        headline: pick(dict.hero.headline),
        sub: pick(dict.hero.sub),
        ctaPrimary: pick(dict.hero.ctaPrimary),
        ctaSecondary: pick(dict.hero.ctaSecondary)
      },
      contact: {
        title: pick(dict.contact.title),
        name: pick(dict.contact.name),
        email: pick(dict.contact.email),
        message: pick(dict.contact.message),
        send: pick(dict.contact.send),
        sending: pick(dict.contact.sending),
        toastSuccessTitle: pick(dict.contact.toastSuccessTitle),
        toastSuccessBody: pick(dict.contact.toastSuccessBody),
        toastErrorTitle: pick(dict.contact.toastErrorTitle),
        toastErrorBody: pick(dict.contact.toastErrorBody),
        toastNetworkError: pick(dict.contact.toastNetworkError)
      },
      services: {
        title: pick(dict.services.title),
        description: pick(dict.services.description)
      },
      companyValues: {
        title: pick(dict.companyValues.title),
        subtitle: pick(dict.companyValues.subtitle),
        fast: {
          title: pick(dict.companyValues.fast.title),
          description: pick(dict.companyValues.fast.description)
        },
        trusted: {
          title: pick(dict.companyValues.trusted.title),
          description: pick(dict.companyValues.trusted.description)
        },
        personal: {
          title: pick(dict.companyValues.personal.title),
          description: pick(dict.companyValues.personal.description)
        }
      },
      features: {
        professional: pick(dict.features.professional),
        support: pick(dict.features.support),
        trusted: pick(dict.features.trusted)
      },
      pricing: {
        title: pick(dict.pricingPage.title)
      },
      language: {
        en: pick(dict.language.en),
        pl: pick(dict.language.pl)
      }
    }
  })

  return { t }
}
