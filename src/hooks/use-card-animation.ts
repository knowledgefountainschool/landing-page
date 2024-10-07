import { cn } from '@/lib/utils';
import { animate } from 'framer-motion';
import * as React from 'react';

const useCardAnimation = () => {
  const animatedContainer = cn(
    'h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]'
  );

  React.useEffect(() => {
    const scale = [1, 1.1, 1];
    const transform = [
      'translateY(0px)',
      'translateY(-4px)',
      'translateY(0px)',
    ];
    const sequence = [
      [
        '.circle-1',
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        '.circle-2',
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        '.circle-3',
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        '.circle-4',
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        '.circle-5',
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
    ];

    // @ts-expect-error no-matching-overload
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  return {
    animatedContainer,
  };
};

export default useCardAnimation;
