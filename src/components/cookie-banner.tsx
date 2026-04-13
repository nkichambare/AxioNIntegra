'use client';

import { useEffect, useState } from 'react';

const CONSENT_KEY = 'axion_cookie_consent';
const GA_ID = 'G-N9XBDHVLBQ';

function loadGoogleAnalytics() {
  if (document.getElementById('ga-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    (window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }).dataLayer =
      (window as Window & { dataLayer?: unknown[] }).dataLayer || [];
    function gtag(...args: unknown[]) {
      (window as Window & { dataLayer?: unknown[] }).dataLayer!.push(args);
    }
    (window as Window & { gtag?: (...args: unknown[]) => void }).gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_ID);
  };
}

function setConsentCookie(value: 'accepted' | 'denied') {
  const maxAge = 60 * 60 * 24 * 365; // 1 year
  document.cookie = `${CONSENT_KEY}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`;
  localStorage.setItem(CONSENT_KEY, value);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === 'accepted') {
      loadGoogleAnalytics();
    }
  }, []);

  function handleAccept() {
    setConsentCookie('accepted');
    loadGoogleAnalytics();
    setVisible(false);
  }

  function handleDeny() {
    setConsentCookie('denied');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl rounded-2xl border border-border bg-bg p-5 shadow-xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm"
    >
      <p className="text-[13px] font-medium leading-[1.3] text-primary">We use cookies</p>
      <p className="mt-1.5 text-[13px] leading-[1.6] text-secondary">
        We use analytics cookies to understand how visitors interact with our site. No personal data
        is sold or shared. You can decline and the site will work normally.
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={handleAccept}
          className="flex-1 rounded-full bg-accent px-4 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={handleDeny}
          className="flex-1 rounded-full border border-border bg-bg px-4 py-2.5 text-[13px] font-semibold text-secondary transition hover:border-primary hover:text-primary"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
