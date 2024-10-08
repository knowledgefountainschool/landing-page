/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import useMediaQuery from '@/hooks/use-media-query';
import Lenis from 'lenis';

const ScrollerProvider = ({ children }: { children: React.ReactNode }) => {
  const { lg } = useMediaQuery();

  useEffect(() => {
    const anchorLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href*="/#"]')
    );

    if (!lg) {
      // Handling smooth scrolling without Lenis for smaller screens
      anchorLinks.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = anchor.href.split('/#').pop();
          const targetElement = document.getElementById(targetId!);

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
      return;
    } else {
      // Initialize Lenis for smooth scrolling on larger screens
      const lenis = new Lenis({
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        syncTouch: true,
      });

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      anchorLinks.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = anchor.href.split('/#').pop();
          if (targetId) {
            lenis.scrollTo(`#${targetId}`);
          }
        });
      });
      return () => {
        lenis.stop();
      };
    }
  }, [lg]);

  return <>{children}</>;
};

export { ScrollerProvider };
