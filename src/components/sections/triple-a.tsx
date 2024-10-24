import Section from '@/components/common/section';
import { CardDescription, CardTitle } from '@/components/common/card';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { media } from '@/lib/db';
import useMediaQuery from '@/hooks/use-media-query';
import { siteName } from '@/config/site';
import { Icons } from '../common/icons';
import Media from '../common/media';

interface TripleASectionProps {}

interface SectionData {
  title: string;
  description: string;
  images: {
    src: string;
    y: number | MotionValue<number>;
    alt: string;
  }[];
  reverse?: boolean;
}

const TripleASection = ({}: TripleASectionProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });
  // const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  // const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const { lg: isLargeScreen } = useMediaQuery();

  const sectionData: SectionData[] = [
    {
      title: 'Academics',
      description:
        'Pursue excellence in academics through our rigorous programs, designed to challenge and inspire students to achieve their best.',
      images: [
        {
          src: media.studentsLearningInClassroom.image,
          y: isLargeScreen ? md : 0,
          alt: media.studentsLearningInClassroom.name,
        },
        {
          src: media.studentFocusingOnAssignment.image,
          y: 0,
          alt: media.studentFocusingOnAssignment.name,
        },
      ],
    },
    {
      title: 'Arts',
      description:
        'Foster your creativity and explore artistic expression through our vibrant arts programs. From visual arts to performing arts, the opportunities are endless.',
      images: [
        {
          src: media.studentInCostume.image,
          y: isLargeScreen ? md : 0,
          alt: media.studentInCostume.name,
        },
        {
          src: media.studentsPlayingFlutesOrTraditionalAttire.image,
          y: 0,
          alt: media.studentsPlayingFlutesOrTraditionalAttire.name,
        },
      ],
      reverse: true,
    },
    {
      title: 'Athletics',
      description:
        'Stay active and build resilience through our comprehensive athletics programs, aimed at developing both physical and mental strength.',
      images: [
        {
          src: media.childrenParticipatingInSports.image,
          y: isLargeScreen ? md : 0,
          alt: media.childrenParticipatingInSports.name,
        },
        {
          src: media.studentsPlayingFootball.video,
          // media.studentsPlayingFootball.image,
          y: 0,
          alt: media.studentsPlayingFootball.name,
        },
      ],
    },
  ];

  return (
    <Section
      id='triple-a'
      className='bg-darker text-white font-berlingske-serif'
    >
      <div className='pt-8 lg:pt-16 rounded-3xl lg:min-h-[94.5svh] flex-center relative overflow-hidden h-full'>
        <div className='p-8 container mx-auto md:max-w-[40rem] lg:max-w-[55.5rem] xl:max-w-[60rem] space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 flex flex-col justify-center items-center font-berlingske-serif font-semibold h-full text-center'>
          <h4 className='uppercase tracking-[0.5em]'>{siteName}</h4>
          <span>
            <Icons.longArrowWhite className='size-24' />
          </span>
          <h3 className='text-xl leading-[2.25rem] md:text-2xl md:leading-[2.5rem] lg:text-3xl lg:leading-[2.75rem] xl:text-4xl xl:leading-[3rem] tracking-wider'>
            Experience excellence through our Triple A approach, where
            Academics, Arts, and Athletics unite to create well-rounded
            individuals.
            <span className='hidden lg:flex'>
              We empower students to thrive academically, nurture their
              creativity through the arts, and build resilience and teamwork in
              athletics.
            </span>
          </h3>
        </div>
      </div>
      <div
        ref={container}
        className='grid grid-cols-1 space-y-16 lg:space-y-32 mt-16'
      >
        {sectionData.map(({ title, description, images, reverse }) => (
          <div
            className={`lg:flex items-center justify-around lg:min-h-[100vh] ${
              reverse ? 'lg:flex-reverse' : ''
            }`}
          >
            <div
              className={cn(
                'flex gap-4 w-screen lg:w-auto',
                reverse ? 'order-1 lg:order-2' : ''
              )}
            >
              <motion.div
                style={{ y: images[0].y }}
                key={`i_${images[0].alt}}`}
              >
                <Media
                  className='w-[20vh] lg:w-auto lg:h-[40vh] aspect-square object-cover object-center'
                  src={images[0].src}
                  // placeholder='blur'
                  alt={images[0].alt}
                />
              </motion.div>
              <motion.div
                style={{ y: images[1].y }}
                key={`i_${images[1].alt}}`}
              >
                <Media
                  className='w-[30vh] lg:w-auto lg:h-[60vh] aspect-square object-cover object-center'
                  src={images[1].src}
                  // placeholder='blur'
                  alt={images[1].alt}
                />
              </motion.div>
            </div>

            <div
              className={cn(
                'lg:flex justify-center items-center py-10',
                reverse ? 'order-2 lg:order-1' : ''
              )}
            >
              <div>
                <CardTitle
                  className={cn(
                    'lg:text-6xl lg:max-w-sm lg:mr-auto lg:-ml-1',
                    reverse ? 'lg:text-end' : 'lg:text-start'
                  )}
                >
                  {title}
                </CardTitle>
                <CardDescription
                  className={cn(
                    'lg:text-xl lg:max-w-sm lg:mr-auto text-lighter font-san-francisco',
                    reverse ? 'lg:text-end' : 'lg:text-start'
                  )}
                >
                  {description}
                </CardDescription>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TripleASection;
