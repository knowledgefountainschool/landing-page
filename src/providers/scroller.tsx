/* eslint-disable @typescript-eslint/no-unused-vars */
import useMediaQuery from '@/hooks/use-media-query';
import Lenis from 'lenis';
import * as React from 'react';

const ScrollerProvider = ({ children }: { children: React.ReactNode }) => {
  const { lg } = useMediaQuery();

  React.useEffect(() => {
    if (!lg) return;
    // Function to initialize Lenis
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      syncTouch: true,
    });

    // @ts-expect-error Property 'href' does not exist on type 'Element'.ts(2339)
    lenis.on('scroll', (e) => {});

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const anchorLinks = [...document.querySelectorAll('a[href]')];

    anchorLinks
      // @ts-expect-error Property 'href' does not exist on type 'Element'.ts(2339)
      .filter((a) => a.href.includes('/#'))
      .forEach((a) => {
        a.addEventListener('click', (e) => {
          e.preventDefault();
          // @ts-expect-error Property 'href' does not exist on type 'Element'.ts(2339)
          const href = '#' + a.href?.split('/#').at(-1);
          console.log(href);
          lenis.scrollTo(href);
        });
      });

    return () => {
      lenis.stop();
    };
  }, [lg]);

  return <>{children}</>;
};

export { ScrollerProvider };
