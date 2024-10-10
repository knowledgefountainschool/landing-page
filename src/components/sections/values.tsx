import Section from '@/components/common/section';
import { siteName } from '@/config/site';
import { Icons } from '@/components/common/icons';

interface ValuesSectionProps {}

const ValuesSection = ({}: ValuesSectionProps) => {
  return (
    <Section id='core-values' className=''>
      {/* CARD */}
      <div className='py-16 lg:py-32 rounded-3xl lg:min-h-[94.5svh] bg-darker text-white flex-center text-center relative shadow overflow-hidden h-full'>
        <div className='p-8 container mx-auto md:max-w-[40rem] lg:max-w-[55.5rem] xl:max-w-[60rem] space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 flex flex-col justify-center items-center font-berlingske-serif font-semibold h-full'>
          <h4 className='uppercase tracking-[0.5em]'>Our Student Profile</h4>
          <span>
            <Icons.longArrowWhite className='size-24' />
          </span>
          <h3 className='text-2xl leading-[2.25rem] md:leading-[2.5rem] lg:text-3xl lg:leading-[2.75rem] xl:text-4xl xl:leading-[3rem] tracking-wide'>
            Students at {siteName} embrace five core values that guide them in
            reaching their full potential. These values serve as the foundation
            for everything we teach.
          </h3>
        </div>
      </div>

      {/* VALUES */}
    </Section>
  );
};

export default ValuesSection;
