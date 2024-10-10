import Section from '@/components/common/section';
import { siteName } from '@/config/site';
import GalleryMarquee from '../common/gallery-marquee';
import { Icons } from '../common/icons';

interface AboutSectionProps {}

const AboutSection = ({}: AboutSectionProps) => {
  return (
    <Section id='about' className=''>
      <div className='py-16 lg:py-32 rounded-3xl min-h-[94.5svh] bg-darker text-white flex-center text-center relative shadow overflow-hidden h-full'>
        <div className='p-5 md:p-6 lg:p-7 xl:p-8 container mx-auto md:max-w-[40rem] lg:max-w-[55.5rem] xl:max-w-[60rem] space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 flex flex-col justify-center items-center font-berlingske-serif font-semibold h-full'>
          <h4 className='uppercase tracking-[0.5em]'>About Us</h4>
          <span>
            <Icons.longArrowWhite className='size-24' />
          </span>
          <h3 className='text-xl leading-[2.25rem] md:text-2xl md:leading-[2.5rem] lg:text-3xl lg:leading-[2.75rem] xl:text-4xl xl:leading-[3rem] tracking-wider'>
            At {siteName}, we build the foundation for excellence through our
            devotion to advancing our students in mind, body, and spirit. We
            strive to provide each student with a quality education while
            instilling DATES - Discipline, Accountability, Teamwork, Excellence,
            Spirituality.
            {/* <br />{siteName} teachers, administrators, and staff are
            dedicated to equipping our students with the skills necessary to be
            successful in life and beneficial to the community. */}
          </h3>
        </div>

        <div className='absolute -bottom-4 inset-x-0 flex justify-center items-end h-[20%] w-full'>
          <Icons.logo className='opacity-30 h-full w-full' />
        </div>
      </div>

      <GalleryMarquee />
    </Section>
  );
};

export default AboutSection;
