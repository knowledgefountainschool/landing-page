import { galleryMarqueeMedia } from '@/lib/db';
import Marquee from 'react-fast-marquee';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useMemo, useCallback } from 'react';
import { anim, opacity, translate } from '@/lib/anim';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/use-media-query';
import Image from './image';
import Modal from './modal';
import { Button } from './button';
import { Icons } from './icons';

interface GalleryMarqueeProps {}

const GalleryMarquee = ({}: GalleryMarqueeProps) => {
  const [hoveredImage, setHoveredImage] = useState({
    isActive: false,
    index: 0,
    name: '',
    image: '',
  });

  const [clickedImage, setClickedImage] = useState({
    isActive: false,
    index: 0,
    name: '',
    image: '',
  });

  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [speed, setSpeed] = useState(50);
  const MAX_SPEED = 200;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isSmallMobile, isLargeMobile, isTablet, isLaptop, isDesktop } =
    useMediaQuery();

  const heightRanges = {
    default: [15, 30],
    md: [20, 40],
    lg: [25, 50],
    xl: [30, 60],
  };

  type Range = (typeof heightRanges)[keyof typeof heightRanges];

  const generateHeights = useCallback((range: Range) => {
    return galleryMarqueeMedia.map(
      () => Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0]
    );
  }, []);

  const calculatedHeights = useMemo(() => {
    let range: Range;

    if (isSmallMobile || isLargeMobile) {
      range = heightRanges.default;
    } else if (isTablet) {
      range = heightRanges.md;
    } else if (isLaptop) {
      range = heightRanges.lg;
    } else if (isDesktop) {
      range = heightRanges.xl;
    } else {
      return generateHeights(heightRanges.default);
    }

    return generateHeights(range);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isSmallMobile,
    isLargeMobile,
    isTablet,
    isLaptop,
    isDesktop,
    generateHeights,
  ]);

  const containerHeight = useMemo(() => {
    const maxHeight = Math.max(...calculatedHeights);
    return `${maxHeight + 10}vh`;
  }, [calculatedHeights]);

  // Optimized handleArrowClick to avoid unnecessary re-renders or marquee resets
  const handleArrowClick = useCallback(
    (clickedDirection: 'left' | 'right') => {
      if (direction === clickedDirection) {
        setSpeed((prev) => Math.min(prev + 25, MAX_SPEED));
      } else {
        setDirection(clickedDirection);
        setSpeed(50); // Reset speed when direction changes
      }
    },
    [direction]
  );

  return (
    <>
      <div className='space-y-4'>
        <div className='relative' style={{ height: containerHeight }}>
          <div className='w-full absolute z-[2]'>
            <Marquee
              pauseOnClick
              pauseOnHover
              autoFill
              className='space-x-1.5'
              direction={direction}
              speed={speed}
            >
              {galleryMarqueeMedia.map((media, index) => {
                const height = calculatedHeights[index] ?? 30;

                return (
                  <motion.div
                    className='py-2'
                    key={index}
                    style={{ height: `${height}vh` }}
                    onMouseOver={() => {
                      setHoveredImage({
                        isActive: true,
                        index,
                        name: media.name,
                        image: media.image,
                      });
                    }}
                    onMouseLeave={() => {
                      setHoveredImage({
                        isActive: false,
                        index,
                        name: '',
                        image: '',
                      });
                    }}
                    variants={opacity}
                    animate={
                      hoveredImage.isActive && hoveredImage.index !== index
                        ? 'open'
                        : 'closed'
                    }
                  >
                    <Image
                      src={media.image}
                      width={2000}
                      height={2000}
                      onClick={() => {
                        setClickedImage({
                          isActive: true,
                          index,
                          name: media.name,
                          image: media.image,
                        });
                        setIsModalOpen(true);
                      }}
                      className={cn(
                        'h-full w-auto aspect-auto object-contain mx-3 cursor-pointer shadow'
                      )}
                      fetchPriority='high'
                      alt={media.name}
                    />
                  </motion.div>
                );
              })}
            </Marquee>
          </div>

          <AnimatePresence>
            {hoveredImage?.name && (
              <div className='w-full absolute z-[1] top-14'>
                <motion.div className='h-full' {...anim(translate)}>
                  <Marquee
                    direction='right'
                    autoFill
                    className='h-full text-darker uppercase font-cormorant-garamond text-2xl lg:text-3xl font-semibold'
                  >
                    <span className='mx-5'>{hoveredImage?.name}</span>
                  </Marquee>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Control arrows below the marquee */}
        <div className='flex justify-center items-center gap-8'>
          <Button
            variant='subtle'
            onClick={() => handleArrowClick('left')}
            aria-label='Move left'
          >
            <Icons.longArrowWhite className='size-12 md:size-14 lg:size-16 xl:size-20 rotate-90' />
          </Button>

          <Button
            variant='subtle'
            onClick={() => handleArrowClick('right')}
            aria-label='Move right'
          >
            <Icons.longArrowWhite className='size-12 md:size-14 lg:size-16 xl:size-20 -rotate-90' />
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && clickedImage.image && (
          <Modal
            onClose={() => setIsModalOpen(false)}
            className='bg-darker flex-col-center py-20 space-y-8 text-center text-white font-cormorant-garamond'
          >
            <Image
              src={clickedImage.image}
              className={cn('size-full object-contain')}
              alt={clickedImage.name}
              fetchPriority='high'
            />
            <div className='capitalize text-xl lg:text-2xl'>
              {clickedImage.name}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryMarquee;
