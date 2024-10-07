import GalleryMarquee from '@/components/common/gallery-marquee';
import AboutSection from '@/components/sections/about';
import AcademicsAndFacilitiesAndExtracurricularsSection from '@/components/sections/academics-and-facilities-and-extracurriculars';
import CtaSection from '@/components/sections/cta';
import DonationSection from '@/components/sections/donation';
import HeroSection from '@/components/sections/hero';
import ValuesSection from '@/components/sections/values';

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <div className='space-y-6'>
      <HeroSection />
      <AboutSection />
      <GalleryMarquee />
      <ValuesSection />
      <AcademicsAndFacilitiesAndExtracurricularsSection />
      <DonationSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
