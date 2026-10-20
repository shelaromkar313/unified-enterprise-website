import React, { ElementType, ReactNode, CSSProperties } from 'react';
import { useScrollReveal, RevealDirection, ScrollRevealOptions } from '../../hooks/useScrollReveal';

export interface ScrollRevealProps extends ScrollRevealOptions {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

/**
 * ScrollReveal Component
 * Smoothly reveals content as it scrolls into the viewport.
 * Fades in and translates upward (20–32px) using a polished cubic-bezier deceleration easing curve.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  as: Component = 'div',
  children,
  className = '',
  style = {},
  id,
  threshold = 0.08,
  rootMargin = '0px 0px -50px 0px',
  delay = 0,
  duration = 800,
  distance = 32,
  direction = 'up',
  once = true,
  ...rest
}) => {
  const { ref, style: revealStyle } = useScrollReveal<HTMLElement>({
    threshold,
    rootMargin,
    delay,
    duration,
    distance,
    direction,
    once,
  });

  return (
    <Component
      ref={ref}
      id={id}
      className={`scroll-reveal-item ${className}`}
      style={{
        ...style,
        ...revealStyle,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export interface ScrollRevealGroupProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  stagger?: number; // Milliseconds between child reveals (e.g. 100–140ms)
  baseDelay?: number;
  duration?: number;
  distance?: number;
  direction?: RevealDirection;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * ScrollRevealGroup Component
 * Staggers direct children smoothly as the container enters the viewport.
 * Caps maximum stagger delay at 400ms so page interaction never feels sluggish.
 */
export const ScrollRevealGroup: React.FC<ScrollRevealGroupProps> = ({
  as: Component = 'div',
  children,
  className = '',
  style = {},
  stagger = 120,
  baseDelay = 0,
  duration = 800,
  distance = 32,
  direction = 'up',
  threshold = 0.08,
  rootMargin = '0px 0px -50px 0px',
  once = true,
  ...rest
}) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <Component className={className} style={style} {...rest}>
      {childrenArray.map((child, index) => {
        // Progressive stagger capped at 320ms to avoid sluggish delays
        const childDelay = baseDelay + Math.min(index * stagger, 320);

        return (
          <ScrollReveal
            key={index}
            delay={childDelay}
            duration={duration}
            distance={distance}
            direction={direction}
            threshold={threshold}
            rootMargin={rootMargin}
            once={once}
          >
            {child}
          </ScrollReveal>
        );
      })}
    </Component>
  );
};

export default ScrollReveal;
