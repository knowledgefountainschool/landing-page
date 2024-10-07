import { cn } from '@/lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn('grid grid-cols-2 lg:grid-cols-4 gap-2.5', className)}>
      {children}
    </div>
  );
};
