export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && "gtag" in window) {
    ((window as Record<string, unknown>).gtag as (...args: unknown[]) => void)("event", name, params);
  }
}

export const trackReservationClick = () => trackEvent("reservation_click");

export const trackPhoneClick = () => trackEvent("phone_click");

export const trackMenuDownload = (menu: string) =>
  trackEvent("menu_download", { menu });

export const trackLanguageSwitch = (locale: string) =>
  trackEvent("language_switch", { locale });

export const trackDirectionsClick = () => trackEvent("directions_click");

export const trackEmailClick = () => trackEvent("email_click");

export const trackSocialClick = (platform: string) =>
  trackEvent("social_click", { platform });
