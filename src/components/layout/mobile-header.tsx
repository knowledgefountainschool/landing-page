import { useEffect, useState } from 'react';
import { buttonVariants } from '@/components/common/button';
import { Icons } from '@/components/common/icons';
import { cn } from '@/lib/utils';
import Link from '@/components/common/link';
import useNavbar from '@/hooks/use-navbar';

interface MobileHeaderProps {}

const MobileHeader = ({}: MobileHeaderProps) => {
  const { toggleNavbar, isActive } = useNavbar();

  const [headerTheme, setMobileHeaderTheme] = useState(
    'bg-transparent text-white'
  );

  const getScrollThreshold = () => window.innerHeight * 0.1;

  useEffect(() => {
    const updateMobileHeaderTheme = (scrollY: number) => {
      const threshold = getScrollThreshold();
      const themeClass =
        scrollY > threshold
          ? 'bg-brand text-darker border border-darker transition-all duration-300'
          : 'bg-transparent text-white border-none transition-all duration-300';
      setMobileHeaderTheme(themeClass);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      updateMobileHeaderTheme(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn('fixed inset-x-0 p-7 z-50 flex items-center')}>
      <div
        className={cn(
          'flex items-center p-5 md:p-6 rounded-3xl gap-5 w-full uppercase text-xs md:text-sm font-medium bg-opacity-95 transition-all duration-300 ease-in-out',
          headerTheme
        )}
      >
        <div className='flex items-center justify-between w-full relative'>
          <div className='flex items-center'>
            <Link to='/#hero'>
              <Icons.logo
                className={cn('size-12 flex items-center justify-center')}
              />
            </Link>
          </div>

          <div className='ml-auto flex items-center'>
            <div
              role='button'
              onClick={toggleNavbar}
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  className: 'text-white text-2xs md:text-xs px-4 md:px-5',
                  size: 'sm',
                })
              )}
            >
              {isActive ? 'Close' : 'Menu'}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
