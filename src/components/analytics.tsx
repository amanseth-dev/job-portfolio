'use client';

import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const measurementId = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  useEffect(() => {
    if (!measurementId) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);

    const trackInteraction = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const control = event.target.closest<HTMLElement>('a, button, [role="button"]');
      if (!control) return;

      const label =
        control.getAttribute('aria-label')?.trim() ||
        control.getAttribute('title')?.trim() ||
        control.textContent?.trim().replace(/\s+/g, ' ').slice(0, 100) ||
        'unlabeled';
      const isLink = control instanceof HTMLAnchorElement;
      let destination: string | undefined;

      if (isLink && control.href) {
        const url = new URL(control.href);
        destination = url.protocol === 'http:' || url.protocol === 'https:'
          ? `${url.hostname}${url.pathname}`
          : url.protocol.slice(0, -1);
      }

      window.gtag('event', 'ui_interaction', {
        element_type: isLink ? 'link' : 'button',
        element_label: label,
        ...(destination ? { destination } : {}),
      });
    };

    document.addEventListener('click', trackInteraction);
    return () => document.removeEventListener('click', trackInteraction);
  }, []);

  if (!measurementId) return null;

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      strategy="afterInteractive"
    />
  );
}
