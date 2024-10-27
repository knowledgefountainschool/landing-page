import { navItems } from '@/lib/nav';
import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/common/button';
import { Icons } from '@/components/common/icons';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/use-media-query';
import Link from '@/components/common/link';
import TheaterToggle from '../common/theater-toggle';

interface DesktopHeaderProps {}

const { cta } = siteConfig;

const DesktopHeader = ({}: DesktopHeaderProps) => {
  const { isTablet, isLaptop, isDesktop } = useMediaQuery();

  const [headerTheme, setDesktopHeaderTheme] = useState(
    'bg-transparent text-white'
  );
  const [logoSize, setLogoSize] = useState('size-20');
  const [shadow, setShadow] = useState('shadow-sm shadow-white/50');

  const getScrollThreshold = () => window.innerHeight * 0.1;

  useEffect(() => {
    const updateLogoAndShadow = (scrollY: number) => {
      const threshold = getScrollThreshold();

      const isScrolled = scrollY > threshold;
      const shadowClass = isScrolled
        ? 'shadow-sm shadow-black/50'
        : 'shadow-sm shadow-white/50';
      setShadow(shadowClass);

      if (isDesktop || isLaptop) {
        setLogoSize(isScrolled ? 'size-16 p-3' : 'size-28 mt-3 p-6');
      } else if (isTablet) {
        setLogoSize(isScrolled ? 'size-14 p-1' : 'size-20 mt-2 p-3');
      } else {
        setLogoSize('size-12');
      }
    };

    const updateDesktopHeaderTheme = (scrollY: number) => {
      const threshold = getScrollThreshold();
      const themeClass =
        scrollY > threshold
          ? 'bg-brand text-darker border border-darker transition-all duration-300'
          : 'bg-transparent text-white border-none transition-all duration-300';
      setDesktopHeaderTheme(themeClass);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      updateLogoAndShadow(scrollY);
      updateDesktopHeaderTheme(scrollY);
    };

    updateLogoAndShadow(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTablet, isLaptop, isDesktop]);

  return (
    <header className={cn('fixed inset-x-0 p-10 z-50 flex items-center')}>
      <div
        className={cn(
          'flex items-center p-7 xl:p-8 rounded-3xl gap-4 w-full uppercase text-xs md:text-sm font-medium bg-opacity-95 transition-all duration-500 ease-in-out',
          headerTheme
        )}
      >
        <div className='flex items-center justify-between w-full relative'>
          <nav className='flex gap-4 items-center'>
            {navItems
              .filter((item) => item.href !== '/#cta')
              .map((item, index) => (
                <Link key={index} to={item.href}>
                  {item.title}
                </Link>
              ))}
          </nav>

          <Link
            to='/#hero'
            className={cn(
              logoSize,
              shadow,
              'transition-all duration-300 ease-in-out',
              'absolute-center bg-white rounded-full'
            )}
          >
            <Icons.logo />
          </Link>

          <div className='ml-auto flex gap-4 items-center'>
            <div className='flex gap-2 items-center'>
              <TheaterToggle />
            </div>

            <a
              href={cta}
              target='_blank'
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  className: 'text-white text-sm px-6',
                  size: 'default',
                })
              )}
            >
              Book A Tour
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
