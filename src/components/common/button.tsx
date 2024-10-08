import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'active:scale-95 inline-flex font-medium items-center justify-center rounded-full text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transform hover:-translate-y-1 transition duration-400',
  {
    variants: {
      variant: {
        default: 'bg-darker hover:bg-darker/95 shadow text-white',
        secondary: 'bg-brand hover:bg-brand/95 shadow text-darker',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border bg-transparent hover:bg-brand/10',
        subtle: 'bg-transparent hover:bg-brand/10',
        white: 'rounded-lg border bg-card text-card-foreground shadow-sm',
        link: 'underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 py-2 px-6',
        thin: 'h-9',
        sm: 'h-9 px-2 text-xs',
        xs: 'h-8 px-1.5 rounded-sm',
        lg: 'h-11 px-8',
        icon: 'size-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
