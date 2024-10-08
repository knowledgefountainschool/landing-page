import { siteConfig } from '@/config/site';
import useDate from '@/hooks/use-date';
import { Icons } from '@/components/common/icons';

const { siteName } = siteConfig;

const Footer = () => {
  const { year } = useDate();
  return (
    <footer className='p-5 md:p-6 lg:p-7 xl:p-8 min-h-[35svh] md:min-h-[40svh] lg:min-h-[45svh] xl:min-h-[50svh] text-xs tracking-tighter font-semibold'>
      <div className='border-y border-darker flex items-center justify-between py-12 gap-3'>
        <p>
          &#169; {year} {siteName}. All Rights Reserved.
        </p>
        <Icons.logo className='size-6 md:size-7 lg:size-8 xl:size-9' />
      </div>

      <div className='prose py-12'>
        <ol type='1' className='space-y-4 font-medium'>
          <li>
            Our mission is to create an environment where students are empowered
            to achieve academic success and grow as individuals who contribute
            positively to society.
          </li>
          <li>
            At {siteName}, we prioritize academic excellence through a
            well-rounded curriculum and the development of critical thinking and
            leadership skills. Our holistic approach ensures that students are
            prepared to face challenges both inside and outside the classroom.
          </li>
          <li>
            {siteName} encourages the pursuit of personal growth alongside
            academic success. We strive to foster a community that values
            integrity, compassion, and responsibility.
          </li>
          <li>
            Join us at {siteName} as we continue to build a legacy of nurturing
            confident, compassionate, and accomplished individuals. Explore our
            academic programs, extracurricular activities, and unique learning
            environment.
          </li>
          <li>
            For more information about our programs, values, or to schedule a
            visit, please visit our contact page or reach out to our admissions
            office. We look forward to welcoming you to {siteName}.
          </li>
        </ol>
      </div>
    </footer>
  );
};

export default Footer;
