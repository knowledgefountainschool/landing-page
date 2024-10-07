import Section from '@/components/common/section';
import Title from '@/components/common/title';

interface DonationSectionProps {}

const DonationSection = ({}: DonationSectionProps) => {
  return (
    <Section id='donate'>
      <Title>donationSection</Title>
      <div className='px-6 pt-7 pb-8'>
        <div className='w-full'></div>
      </div>
    </Section>
  );
};

export default DonationSection;
