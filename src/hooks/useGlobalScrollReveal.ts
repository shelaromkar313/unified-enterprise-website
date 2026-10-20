import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useGlobalScrollReveal Hook
 * Implements Cisco-style scroll-triggered reveal animations across the entire application.
 * As the user scrolls down, below-the-fold content, sections, and product cards smoothly
 * fade in and glide up slowly using a luxurious 850ms deceleration curve.
 */
export function useGlobalScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Graceful fallback for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.cisco-reveal, [data-reveal], .reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Graceful fallback for environments without IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.cisco-reveal, [data-reveal], .reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const updateAndObserve = () => {
      // Automatically identify sections, cards, and marked elements below the viewport
      const elements = document.querySelectorAll<HTMLElement>(
        '.cisco-reveal, [data-reveal], .reveal-on-scroll, main section:not(:first-child), main article, .cisco-card-reveal'
      );

      elements.forEach((el) => {
        // Skip navbars, dialogs, modals, and explicitly ignored elements
        if (
          el.hasAttribute('data-no-reveal') ||
          el.closest('nav') ||
          el.closest('[role="dialog"]') ||
          el.closest('.modal')
        ) {
          return;
        }

        // Apply reveal class
        el.classList.add('cisco-reveal');

        const rect = el.getBoundingClientRect();
        // If element is already in the upper viewport upon landing/routing, reveal immediately
        if (rect.top < window.innerHeight * 0.70 && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });
    };

    // Initial check after DOM paint
    const timer = setTimeout(updateAndObserve, 70);

    // Watch for dynamic tab changes (e.g. category switches, catalog filters)
    const mutationObserver = new MutationObserver(() => {
      updateAndObserve();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);
}
