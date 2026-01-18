'use client';

import { useEffect, useRef } from 'react';

export function useLenis() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    // Get the global Lenis instance
    const lenis = (window as any).lenis;
    if (lenis) {
      lenisRef.current = lenis;
    }
  }, []);

  const scrollTo = (target: string | number, options?: any) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  };

  const scrollToTop = () => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.5 });
    }
  };

  const scrollToElement = (element: string) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(element, { duration: 1.2 });
    }
  };

  return {
    scrollTo,
    scrollToTop,
    scrollToElement,
    lenis: lenisRef.current,
  };
}