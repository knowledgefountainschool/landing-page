import Section from '@/components/common/section';
import { CardDescription, CardTitle } from '@/components/common/card';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { media } from '@/lib/db';
import useMediaQuery from '@/hooks/use-media-query';
import { siteName } from '@/config/site';
import { Icons } from '../common/icons';
import Video from '../common/video';
import Image from '../common/image';

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
  hasVideo?: boolean;
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
          src: isLargeScreen
            ? media.studentsPlayingFootball.video
            : media.studentsPlayingFootball.image,
          y: isLargeScreen ? md : 0,
          alt: media.studentsPlayingFootball.name,
        },
        {
          src: media.childrenParticipatingInSports.image,
          y: 0,
          alt: media.childrenParticipatingInSports.name,
        },
      ],
      hasVideo: true,
    },
  ];

  return (
    <Section
      id='triple-a'
      className='bg-darker text-white font-cormorant-garamond'
    >
      <div className='pt-8 lg:pt-16 rounded-3xl lg:min-h-[94.5svh] flex-center relative overflow-hidden h-full'>
        <div className='p-8 container mx-auto md:max-w-[40rem] lg:max-w-[55.5rem] xl:max-w-[60rem] space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12 flex flex-col justify-center items-center font-cormorant-garamond font-semibold h-full text-center'>
          <h1 className='uppercase tracking-[0.5em]'>{siteName}</h1>
          <span>
            <Icons.longArrowWhite className='size-24' />
          </span>
          <h2 className='text-xl leading-[2.25rem] md:text-2xl md:leading-[2.5rem] lg:text-3xl lg:leading-[2.75rem] xl:text-4xl xl:leading-[3rem] tracking-wider'>
            Experience excellence through our Triple A approach, where
            Academics, Arts, and Athletics unite to create well-rounded
            individuals.
            <span className='hidden lg:flex'>
              We empower students to thrive academically, nurture their
              creativity through the arts, and build resilience and teamwork in
              athletics.
            </span>
          </h2>
        </div>
      </div>
      <div
        ref={container}
        className='grid grid-cols-1 space-y-16 lg:space-y-32 mt-16'
      >
        {sectionData.map(
          ({ title, description, images, reverse, hasVideo }) => (
            <div
              key={title}
              className={`lg:flex items-center justify-around lg:min-h-[100vh] ${
                reverse ? 'lg:flex-reverse' : ''
              }`}
            >
              <div
                className={cn(
                  'flex gap-4 lg:w-auto',
                  reverse ? 'order-1 lg:order-2' : '',
                  isLargeScreen
                    ? ''
                    : 'grid place-content-center place-items-center grid-cols-2'
                )}
              >
                <motion.div
                  style={{ y: images[0].y }}
                  key={`i_${images[0].alt}}`}
                  className='col-span-1'
                >
                  {hasVideo ? (
                    <Video
                      fallbackImage={images[0].src}
                      className='lg:h-[38vh] aspect-square object-cover object-center'
                      src={images[0].src}
                      alt={images[0].alt}
                    />
                  ) : (
                    <Image
                      className={cn(
                        isLargeScreen
                          ? 'h-[38vh] aspect-square object-cover object-center'
                          : 'max-h-[200px] aspect-square object-cover object-top'
                      )}
                      src={images[0].src}
                      alt={images[0].alt}
                    />
                  )}
                </motion.div>
                <motion.div
                  style={{ y: images[1].y }}
                  key={`i_${images[1].alt}}`}
                  className='col-span-1'
                >
                  <Image
                    className={cn(
                      isLargeScreen
                        ? 'h-[58vh] aspect-square object-cover object-center'
                        : 'max-h-[200px] aspect-square object-cover object-top'
                    )}
                    src={images[1].src}
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
          )
        )}
      </div>
    </Section>
  );
};

export default TripleASection;
