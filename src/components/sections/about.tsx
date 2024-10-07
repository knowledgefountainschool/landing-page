import Section from '@/components/common/section';
import Title from '@/components/common/title';

interface AboutSectionProps {}

const AboutSection = ({}: AboutSectionProps) => {
  return (
    <Section id='about'>
      <Title>aboutSection</Title>
      <div className='px-6 pt-7 pb-8'>
        <div className='w-full'></div>
      </div>
    </Section>
  );
};

export default AboutSection;
