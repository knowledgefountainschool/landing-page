import Section from '@/components/common/section';
import { Card, CardDescription, CardTitle } from '@/components/common/card';
import Image from '@/components/common/image';
import { cn } from '@/lib/utils';

interface TripleASectionProps {}

interface SectionData {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const sectionData: SectionData[] = [
  {
    title: 'Academics',
    description:
      'Pursue excellence in academics through our rigorous programs, designed to challenge and inspire students to achieve their best.',
    imageSrc: '/sign-up.png',
    imageAlt: 'Academic Excellence',
  },
  {
    title: 'Arts',
    description:
      'Foster your creativity and explore artistic expression through our vibrant arts programs. From visual arts to performing arts, the opportunities are endless.',
    imageSrc: '/confirm-pin.png',
    imageAlt: 'Arts & Creativity',
    reverse: true,
  },
  {
    title: 'Athletics',
    description:
      'Stay active and build resilience through our comprehensive athletics programs, aimed at developing both physical and mental strength.',
    imageSrc: '/send-money.png',
    imageAlt: 'Athletics',
  },
];

const TripleASection = ({}: TripleASectionProps) => {
  return (
    <Section
      id='triple-a'
      className='bg-darker text-white font-berlingske-serif'
    >
      <div className='grid grid-cols-1 gap-4 mt-32'>
        {sectionData.map((section, index) => (
          <TripleAItem key={index} {...section} />
        ))}
      </div>
    </Section>
  );
};

const TripleAItem = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse,
}: SectionData) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 ${
        reverse ? 'lg:flex-row-reverse' : ''
      }`}
    >
      <Card
        className={cn(
          'flex-center pt-3 px-3 pb-3 lg:pt-3 lg:px-6 lg:pb-6 ',
          reverse ? 'order-1 lg:order-2' : ''
        )}
      >
        <Image
          src={imageSrc}
          height={768}
          width={1366}
          alt={imageAlt}
          className='size-full object-contain rounded-3xl'
        />
      </Card>
      <div
        className={cn(
          'lg:flex justify-center items-center py-10',
          reverse ? 'order-2 lg:order-1' : ''
        )}
      >
        <div>
          <CardTitle className='lg:text-6xl lg:max-w-sm lg:mr-auto lg:text-start lg:-ml-1'>
            {title}
          </CardTitle>
          <CardDescription className='lg:text-xl lg:max-w-sm lg:mr-auto lg:text-start text-lighter font-san-francisco'>
            {description}
          </CardDescription>
        </div>
      </div>
    </div>
  );
};

export default TripleASection;
