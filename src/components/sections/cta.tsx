import Section from '@/components/common/section';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/common/button';
import { ChevronRight } from 'lucide-react';
import { Icons } from '../common/icons';

interface CtaSectionProps {}

const { cta, siteName } = siteConfig;

const CtaSection = ({}: CtaSectionProps) => {
  return (
    <Section id='cta' className='mt-32'>
      <div className='rounded-3xl shadow min-h-[80svh] lg:min-h-[94.5svh] bg-darker text-white flex-center text-center relative overflow-hidden'>
        {/* <div className='absolute -top-0 inset-x-0 flex justify-center items-end h-[12%] w-full'>
          <Icons.logo className='opacity-30 h-full w-full' />
        </div> */}

        <div className='p-8 lg:py-32 container mx-auto md:max-w-[40rem] lg:max-w-[55.5rem] xl:max-w-[60rem] space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 flex flex-col justify-center items-center font-berlingske-serif font-semibold h-full'>
          <h4 className='uppercase tracking-[0.5em]'>Take A Tour</h4>
          <span>
            <Icons.longArrowWhite className='size-24' />
          </span>
          <h3 className='text-2xl leading-[2.25rem] md:leading-[2.5rem] lg:text-3xl lg:leading-[2.75rem] xl:text-4xl xl:leading-[3rem] tracking-wider'>
            Experience all that {siteName} has to offer by taking a tour of our
            beautiful school.
          </h3>
          <Link
            to={cta}
            className={cn(
              buttonVariants({
                size: 'lg',
                variant: 'secondary',
                className: 'font-san-francisco',
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
    </Section>
  );
};

export default CtaSection;
