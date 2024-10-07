import Section from '@/components/common/section';
import Title from '@/components/common/title';

interface ValuesSectionProps {}

const ValuesSection = ({}: ValuesSectionProps) => {
  return (
    <Section id='core-values'>
      <Title>valuesSection</Title>
      <div className='px-6 pt-7 pb-8'>
        <div className='w-full'></div>
      </div>
    </Section>
  );
};

export default ValuesSection;
