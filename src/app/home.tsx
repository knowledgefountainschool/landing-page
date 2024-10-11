import AboutSection from '@/components/sections/about';
import TripleASection from '@/components/sections/triple-a';
import CtaSection from '@/components/sections/cta';
import DonationSection from '@/components/sections/donation';
import HeroSection from '@/components/sections/hero';
import ValuesSection from '@/components/sections/values';
import GalleryMarquee from '@/components/common/gallery-marquee';

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GalleryMarquee />
      <ValuesSection />
      <TripleASection />
      <DonationSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
