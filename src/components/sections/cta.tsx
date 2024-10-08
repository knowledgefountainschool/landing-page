import Section from '@/components/common/section';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/common/button';
import { ChevronRight } from 'lucide-react';

interface CtaSectionProps {}

const { cta, siteName } = siteConfig;

const CtaSection = ({}: CtaSectionProps) => {
  return (
    <Section id='cta'>
      <div className='rounded-3xl min-h-[94.5svh] bg-darker text-white flex-center text-center relative'>
        <div className='p-5 md:p-6 lg:p-7 xl:p-8 container mx-auto md:max-w-[40rem] lg:max-w-[55.5rem] xl:max-w-[60rem] space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12'>
          <h3 className='font-berlingske-serif font-semibold text-xl leading-[2.15rem] md:text-2xl lg:text-3xl xl:text-4xl tracking-wide'>
            Experience all that {siteName} has to offer by taking a tour of our
            beautiful school.
          </h3>
          <Link
            to={cta}
            className={cn(
              buttonVariants({
                size: 'lg',
                variant: 'secondary',
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
