import Section from '@/components/common/section';
import { siteName } from '@/config/site';
import { Icons } from '@/components/common/icons';
import { BentoGrid } from '@/components/common/bento-grid';
import { values } from '@/lib/values';
import { cn } from '@/lib/utils';
import Image from '../common/image';

interface ValueCardProps {
  title: string;
  description: string;
  index: number;
  mediaSrc: string;
  mediaAlt: string;
  className?: string;
}

const ValueCard = ({
  title,
  description,
  index,
  mediaSrc,
  mediaAlt,
  className = '',
}: ValueCardProps) => {
  return (
    <div className={`relative rounded-3xl overflow-hidden ${className} shadow`}>
      <Image
        src={mediaSrc}
        className='rounded-3xl object-cover h-full w-full object-top'
        alt={mediaAlt}
      />
      <div
        className={cn(
          'absolute inset-0 z-[2] text-white flex bg-black/65 rounded-3xl shadow h-full',
          index === 0 || index === 3 ? 'items-end' : 'items-start'
        )}
      >
        <div className={cn(index === 0 || index === 3 ? 'lg:h-[55%]' : 'mt-8')}>
          <div className='pb-8 p-5 md:p-6 lg:p-7 xl:p-8 container mx-auto space-y-4'>
            <h3
              className={cn(
                'font-berlingske-serif font-semibold',
                index === 3 ? 'text-3xl lg:text-5xl' : 'text-3xl'
              )}
            >
              {title}
            </h3>
            <h2 className={cn(index === 3 ? 'lg:text-xl' : 'text-base')}>
              {description}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ValuesSectionProps {}

const ValuesSection = ({}: ValuesSectionProps) => {
  return (
    <Section id='core-values' className='mt-16 mb-32'>
      <div className='py-16 lg:py-32 rounded-3xl lg:min-h-[94.5svh] bg-lighter text-darker blur-[0.1px] flex-center relative shadow overflow-hidden h-full'>
        <div className='p-8 container mx-auto md:max-w-[40rem] lg:max-w-[55.5rem] xl:max-w-[60rem] space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 flex flex-col justify-center items-center font-berlingske-serif font-semibold h-full text-center'>
          <h1 className='uppercase tracking-[0.5em]'>Our Student Profile</h1>
          <span>
            <Icons.longArrowDarker className='size-24' />
          </span>
          <h2 className='text-xl leading-[2.25rem] md:text-2xl md:leading-[2.5rem] lg:text-3xl lg:leading-[2.75rem] xl:text-4xl xl:leading-[3rem] tracking-wider'>
            Students at {siteName} embrace five core values that guide them in
            reaching their full potential. These values serve as the foundation
            for everything we teach.
          </h2>
        </div>
      </div>

      {/* VALUES */}
      <BentoGrid className='mt-32'>
        {values.map((value, index) => (
          <ValueCard
            key={index}
            index={index}
            title={value.title}
            description={value.description}
            mediaSrc={value.mediaSrc}
            mediaAlt={value.mediaAlt}
            className={`col-span-1 h-[50vh] md:h-[60vh] lg:h-[70vh] ${
              index === 3 ? 'lg:col-span-2' : ''
            }`}
          />
        ))}
      </BentoGrid>
    </Section>
  );
};

export default ValuesSection;
