import { useEffect, useRef, useState, useMemo } from 'react';

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none';

export interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: RevealDirection;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const {
    threshold = 0.08,
    rootMargin = '0px 0px -50px 0px',
    delay = 0,
    duration = 800,
    distance = 32,
    direction = 'up',
    once = true,
  } = options;

  const elementRef = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Graceful fallback for environments without IntersectionObserver
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    // Immediate reveal if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    // Check if element is already in the viewport upon mount (e.g. above-the-fold)
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      setHasAnimated(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  // Compute inline transform and transition styles with polished deceleration easing
  const style = useMemo(() => {
    // If reduced motion is preferred or during initial server render, render clean static styles
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return {};
    }

    let initialTranslate = 'translate3d(0, 0, 0)';
    if (direction === 'up') initialTranslate = `translate3d(0, ${distance}px, 0)`;
    else if (direction === 'down') initialTranslate = `translate3d(0, -${distance}px, 0)`;
    else if (direction === 'left') initialTranslate = `translate3d(${distance}px, 0, 0)`;
    else if (direction === 'right') initialTranslate = `translate3d(-${distance}px, 0, 0)`;

    // Polished custom cubic-bezier (snappy start, silky gentle deceleration)
    const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';

    return {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translate3d(0, 0, 0)' : initialTranslate,
      transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
      willChange: isVisible && !hasAnimated ? 'opacity, transform' : 'auto',
    };
  }, [isVisible, hasAnimated, direction, distance, duration, delay]);

  return { ref: elementRef, isVisible, style };
}
