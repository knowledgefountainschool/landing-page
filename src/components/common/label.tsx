import * as React from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps } from './button';

export interface DivProps extends React.HTMLProps<HTMLDivElement> {}

const DarkLabel = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        'bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs leading-6 font-medium inline-block',
        className
      )}
      {...props}
    >
      <span className='absolute inset-0 overflow-hidden rounded-full'>
        <span className='absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
      </span>
      <div className='relative flex space-x-2 items-center z-10 rounded-full bg-darker py-0.5 px-4 ring-1 ring-white/10 '>
        <span>{children}</span>
      </div>
      <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40' />
    </button>
  )
);
DarkLabel.displayName = 'DarkLabel';

const WhiteLabel = React.forwardRef<HTMLDivElement, DivProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'cursor-pointer relative border rounded-full px-3 py-1 text-xs leading-6 font-medium uppercase text-[#76798D] inline-block',
        className
      )}
      {...props}
    >
      <span>{children}</span>
    </div>
  )
);
WhiteLabel.displayName = 'WhiteLabel';

export { DarkLabel, WhiteLabel };
