import Section from '@/components/common/section';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/common/button';
import { ChevronRight } from 'lucide-react';
import Video from '@/components/common/video';

interface HeroSectionProps {}

const { cta, videos, title, headline } = siteConfig;

const HeroSection = ({}: HeroSectionProps) => {
  return (
    <Section id='hero' className='py-5 '>
      <div className='min-h-[94.5svh] relative'>
        <Video
          src={videos[0]}
          className='absolute inset-0 z-[1] rounded-3xl shadow'
        />
        <div className='absolute inset-0 z-[2] text-white flex-center text-center bg-black/35 rounded-3xl shadow'>
          <div className='-mb-8 md:-mb-9 lg:-mb-10 xl:-mb-32 p-5 md:p-6 lg:p-7 xl:p-8 container mx-auto md:max-w-[40rem] lg:max-w-[55.5rem] xl:max-w-[60rem] space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12'>
            <h2 className='text-sm md:text-base lg:text-lg font-normal uppercase tracking-[0.5em]'>
              {title}
            </h2>
            <h3 className='font-berlingske-serif font-semibold text-[1.67rem] leading-[2.15rem] md:text-4xl lg:text-5xl xl:text-6xl tracking-wide'>
              {headline}
            </h3>
            <Link
              to={cta}
              className={cn(
                buttonVariants({
                  size: 'lg',
                }),
                'group w-fit '
              )}
              target='_blank'
            >
              Schedule A Tour{' '}
              <div className='transition-transform duration-300 group-hover:translate-x-1'>
                <ChevronRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
