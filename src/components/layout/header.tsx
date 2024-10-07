import { useEffect, useState } from 'react';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/common/button';
import { Icons } from '@/components/common/icons';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/use-media-query';
import Link from '@/components/common/link';

interface HeaderProps {}

const { cta } = siteConfig;

const Header = ({}: HeaderProps) => {
  const { isSmallMobile, isLargeMobile, isTablet, isLaptop, isDesktop } =
    useMediaQuery();

  // State to manage header theme and logo size
  const [headerTheme, setHeaderTheme] = useState('bg-transparent text-white');
  const [logoSize, setLogoSize] = useState('size-20'); // default to size-20
  const [shadow, setShadow] = useState('shadow-sm shadow-white/50');

  useEffect(() => {
    // Determine scroll threshold based on screen size
    const getScrollThreshold = () => {
      if (isDesktop) return window.innerHeight * 1.0; // 100svh
      if (isLaptop) return window.innerHeight * 0.9; // 90svh
      if (isTablet) return window.innerHeight * 0.8; // 80svh
      return window.innerHeight * 0.7; // 70svh for small and large mobile
    };

    // Adjust the logo size based on screen size and scroll position
    const adjustLogoSize = (scrollY: number) => {
      const threshold = getScrollThreshold();

      // Logic to adjust logo size based on both scroll threshold and screen size
      if (scrollY > threshold) {
        setShadow('shadow-sm shadow-black/50 p-2.5');
        if (isDesktop || isLaptop) {
          setLogoSize('size-16'); // smaller logo when scrolling down on larger screens
        } else if (isTablet) {
          setLogoSize('size-14'); // smaller logo for tablet when scrolling down
        } else {
          setLogoSize('size-12'); // smallest logo for mobile when scrolling down
        }
      } else {
        setShadow('shadow-sm shadow-white/50 p-5');
        if (isDesktop || isLaptop) {
          setLogoSize('size-28 mt-3'); // larger logo when at top for larger screens
        } else if (isTablet) {
          setLogoSize('size-20 mt-2'); // larger logo for tablet when at top
        } else {
          setLogoSize('size-16 mt-1'); // larger logo for mobile when at top
        }
      }
    };

    const handleScroll = () => {
      adjustLogoSize(window.scrollY);

      const threshold = getScrollThreshold();
      if (window.scrollY > threshold) {
        setHeaderTheme('bg-light text-darker transition-all duration-300');
      } else {
        setHeaderTheme('bg-transparent text-white transition-all duration-300');
      }
    };

    adjustLogoSize(window.scrollY); // Adjust logo size on component mount
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSmallMobile, isLargeMobile, isTablet, isLaptop, isDesktop]);

  return (
    <header className='fixed inset-x-0 p-5 md:p-6 lg:p-7 xl:p-8 z-50 flex items-center'>
      <div
        className={cn(
          'flex items-center p-5 md:p-6 lg:p-7 xl:p-8 rounded-3xl gap-5 lg:gap-4 w-full text-sm md:text-base font-medium bg-opacity-95',
          headerTheme
        )}
      >
        <div className='flex items-center justify-between w-full relative'>
          <nav className='hidden lg:flex gap-4 items-center'>
            <Link to='/#about'>About</Link>
            <Link to='/#core-values'>Core Values</Link>
            <Link to='/#academics'>Academics</Link>
            <Link to='/#donate'>Donate</Link>
          </nav>

          <Link
            to='/#hero'
            className={cn(
              logoSize,
              shadow,
              'transition-all duration-300 ease-in-out',
              'absolute-center hidden lg:flex bg-white rounded-full'
            )}
          >
            <Icons.logo />
          </Link>

          <div className='ml-auto flex gap-4 items-center lg:gap-4'>
            <a
              href={cta}
              target='_blank'
              className={cn(
                buttonVariants({
                  variant: 'outline',
                  className: 'shadow-sm shadow-white/50',
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

export default Header;
