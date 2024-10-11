import React from 'react';
import { cn } from '@/lib/utils';

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'w-full pt-4 px-6 lg:px-8 pb-8 lg:pb-16 rounded-3xl border border-[rgba(255,255,255,0.10)] bg-lighter shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        'text-center text-3xl tracking-tighter py-2 mx-auto',
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        'text-center text-base font-light text-zinc-400 max-w-sm mx-auto',
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardContent = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        'h-[15rem] md:h-[20rem] rounded-3xl z-40',
        className,
        showGradient &&
          'bg-lighter [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]'
      )}
    >
      <div className='p-8 overflow-hidden h-full relative flex items-center justify-center'>
        {children}
      </div>
    </div>
  );
};
