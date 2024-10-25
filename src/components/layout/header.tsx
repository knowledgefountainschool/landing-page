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
  const { isSmallMobile, isLargeMobile, isTablet, isLaptop, isDesktop, lg } =
    useMediaQuery();

  const [headerTheme, setHeaderTheme] = useState('bg-transparent text-white');
  const [logoSize, setLogoSize] = useState('size-20');
  const [shadow, setShadow] = useState('shadow-sm shadow-white/50');
  const [isVisible, setIsVisible] = useState(true);

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

    // Update header theme based on scroll position
    const updateHeaderTheme = (scrollY: number) => {
      const threshold = getScrollThreshold();
      const themeClass =
        scrollY > threshold
          ? 'bg-brand text-darker border border-darker transition-all duration-300'
          : 'bg-transparent text-white border-none transition-all duration-300';
      setHeaderTheme(themeClass);
    };

    const updateVisibility = (scrollY: number) => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate the distance from the bottom of the page
      const distanceFromBottom = documentHeight - (scrollY + windowHeight);

      // If within 100svh from the bottom, hide header
      if (distanceFromBottom < windowHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      updateLogoAndShadow(scrollY);
      updateHeaderTheme(scrollY);
      updateVisibility(scrollY);
    };

    // Initial setup on component mount
    updateLogoAndShadow(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isSmallMobile, isLargeMobile, isTablet, isLaptop, isDesktop]);

  return (
    <>
      {!lg && (
        <div className='fixed inset-x-0 px-10 bottom-10 z-50'>
          <nav
            className={cn(
              'flex items-center justify-evenly p-2 rounded-3xl w-full uppercase text-2xs md:text-xs font-medium',
              'bg-darker border border-brand text-white transition-all duration-300 ease-in-out',
              isVisible ? 'scale-100' : 'scale-0 hidden'
            )}
          >
            <Link className='p-2' to='/#about'>
              About
            </Link>
            <Link className='p-2' to='/#core-values'>
              Values
            </Link>
            <Link className='p-2' to='/#triple-a'>
              Triple A
            </Link>
            <Link className='p-2' to='/#donate'>
              Donate
            </Link>
          </nav>
        </div>
      )}
      <header
        className={cn('fixed inset-x-0 p-7 lg:p-10 z-50 flex items-center')}
      >
        <div
          className={cn(
            'flex items-center p-5 md:p-6 lg:p-7 xl:p-8 rounded-3xl gap-5 lg:gap-4 w-full uppercase text-xs md:text-sm font-medium bg-opacity-95 transition-all duration-300 lg:duration-500 ease-in-out',
            headerTheme
            // isVisible ? 'scale-100' : 'scale-0 hidden'
          )}
        >
          <div className='flex items-center justify-between w-full relative'>
            {lg ? (
              <nav className='flex gap-4 items-center'>
                <Link to='/#about'>About</Link>
                <Link to='/#core-values'>Core Values</Link>
                <Link to='/#triple-a'>Triple A</Link>
                <Link to='/#donate'>Donate</Link>
              </nav>
            ) : (
              <>
                <nav className='flex gap-4 items-center'>
                  <Link to='/#hero'>
                    <Icons.logo
                      className={cn(
                        logoSize,
                        'flex items-center justify-center'
                      )}
                    />
                  </Link>
                </nav>
              </>
            )}

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
                    className:
                      'text-white text-2xs md:text-xs lg:text-sm px-4 md:px-5 lg:px-6',
                    size: lg ? 'default' : 'sm',
                  })
                )}
              >
                Book A Tour
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
