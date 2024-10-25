import { useState, useRef, useEffect } from 'react';
import Section from '@/components/common/section';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { buttonVariants } from '@/components/common/button';
import { ChevronRight, Play } from 'lucide-react';
import { media } from '@/lib/db';
import Image from '../common/image';
import useMediaQuery from '@/hooks/use-media-query';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../common/modal';

interface HeroSectionProps {}

const { cta, title, headline } = siteConfig;

const HeroSection = ({}: HeroSectionProps) => {
  const { lg } = useMediaQuery();
  const [isTheaterMode, setIsTheaterMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleTheaterMode = () => {
    setIsTheaterMode(true);
  };

  useEffect(() => {
    if (isTheaterMode && videoRef.current) {
      // Play video when theater mode is activated
      videoRef.current.currentTime = 0;
      videoRef.current.play();

      // Set timeout to exit theater mode after 25 seconds
      timeoutRef.current = setTimeout(() => {
        setIsTheaterMode(false);
      }, 25000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isTheaterMode]);

  return (
    <Section id='hero' className='py-5'>
      <div className='min-h-[94.5svh] relative'>
        <Image
          src={media.class8.image}
          alt='cOmbination'
          className='object-cover w-full h-full absolute inset-0 z-[2] rounded-3xl shadow'
        />

        <AnimatePresence>
          {isTheaterMode && (
            <Modal
              onClose={() => setIsTheaterMode(false)}
              className='fixed inset-0 bg-darker z-50 flex-center'
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='w-full max-w-md rounded-3xl aspect-video relative'
              >
                <video
                  ref={videoRef}
                  src={media.cOmbination.video}
                  className='w-full h-full object-cover rounded-3xl shadow-2xl'
                  playsInline
                  muted
                />
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>

        <div className='absolute inset-0 z-[4] text-white flex-center text-center bg-black/35 rounded-3xl shadow'>
          <div className='-mb-8 md:-mb-9 lg:-mb-10 xl:-mb-32 p-5 md:p-6 lg:p-7 xl:p-8 container mx-auto md:max-w-[40rem] lg:max-w-[55.5rem] xl:max-w-[60rem] space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12'>
            <h2 className='text-sm md:text-base lg:text-lg font-normal uppercase tracking-[0.5em]'>
              {title}
            </h2>
            <h3 className='font-berlingske-serif font-semibold text-[1.67rem] leading-[2.15rem] md:text-4xl lg:text-5xl xl:text-6xl tracking-wide pb-16 lg:pb-0'>
              {headline}
            </h3>

            <div className='flex-center text-center gap-6 lg:-ml-10'>
              <Link
                to={cta}
                className={cn(
                  buttonVariants({
                    size: 'lg',
                  }),
                  'group gap-1'
                )}
                target='_blank'
              >
                Schedule A Tour{' '}
                <div className='transition-transform duration-300 group-hover:translate-x-1'>
                  <ChevronRight />
                </div>
              </Link>
              {lg && (
                <button
                  onClick={handleTheaterMode}
                  className={cn(
                    buttonVariants({
                      size: 'lg',
                      variant: 'outline',
                    }),
                    'group gap-2'
                  )}
                >
                  Play Reel
                  <div className='transition-transform duration-300 group-hover:translate-x-1'>
                    <Play className='size-4' />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
