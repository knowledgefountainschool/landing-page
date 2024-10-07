import { cn } from '@/lib/utils';

interface MainProps {
  children?: React.ReactNode;
}

const Main = ({ children }: MainProps = {}) => {
  return <main className={cn('size-full')}>{children}</main>;
};

export default Main;
