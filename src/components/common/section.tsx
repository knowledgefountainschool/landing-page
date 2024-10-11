import { cn } from '@/lib/utils';
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className='relative'>
      <div
        id={id}
        className='absolute pointer-events-none top-[-6rem] size-0 bg-transparent'
      />
      <div
        className={cn(
          'p-3.5 lg:p-5 min-h-[70svh] md:min-h-[80svh] lg:min-h-[90svh] xl:min-h-[100svh]',
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
