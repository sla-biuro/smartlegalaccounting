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
        title: { en: 'Our Services', pl: 'Nasze usługi' }
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
        title: pick(dict.services.title)
      },
      language: {
        en: pick(dict.language.en),
        pl: pick(dict.language.pl)
      }
    }
  })

  return { t }
}
