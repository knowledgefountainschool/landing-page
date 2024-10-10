import AboutSection from '@/components/sections/about';
import TripleASection from '@/components/sections/triple-a';
import CtaSection from '@/components/sections/cta';
import DonationSection from '@/components/sections/donation';
import HeroSection from '@/components/sections/hero';
import ValuesSection from '@/components/sections/values';

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  return (
    <div className='space-y-32'>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <TripleASection />
      <DonationSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
