import { cn } from '@/lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-3 gap-3.5 lg:gap-5', className)}>
      {children}
    </div>
  );
};
