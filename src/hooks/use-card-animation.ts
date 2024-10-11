import { cn } from '@/lib/utils';
import { animate } from 'framer-motion';
import * as React from 'react';

const useCardAnimation = () => {
  const animatedContainer = cn('flex items-center justify-center');

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
