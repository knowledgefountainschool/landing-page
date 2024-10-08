import Section from '@/components/common/section';
import Title from '@/components/common/title';

interface AcademicsAndFacilitiesAndExtracurricularsSectionProps {}

const AcademicsAndFacilitiesAndExtracurricularsSection =
  ({}: AcademicsAndFacilitiesAndExtracurricularsSectionProps) => {
    return (
      <Section id='academics'>
        <Title>academicsSection</Title>
        <div className='px-6 pt-7 pb-8'>
          <div className='w-full'></div>
        </div>
      </Section>
    );
  };

export default AcademicsAndFacilitiesAndExtracurricularsSection;
