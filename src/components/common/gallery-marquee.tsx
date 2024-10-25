import { galleryMarqueeMedia } from '@/lib/db';
import Marquee from 'react-fast-marquee';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useMemo, useCallback } from 'react';
import { anim, opacity, translate } from '@/lib/anim';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/use-media-query';
import Image from './image';
import Modal from './modal';

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

  const { isSmallMobile, isLargeMobile, isTablet, isLaptop, isDesktop } =
    useMediaQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define height ranges for each screen size
  const heightRanges = {
    default: [15, 30],
    md: [20, 40],
    lg: [25, 50],
    xl: [30, 60],
  };

  type Range = (typeof heightRanges)[keyof typeof heightRanges];

  // Function to generate heights
  const generateHeights = useCallback((range: Range) => {
    return galleryMarqueeMedia.map(
      () => Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0]
    );
  }, []);

  // Calculate heights based on the current screen size
  const calculatedHeights = useMemo(() => {
    let range: Range;

    // Determine the appropriate range based on screen size
    if (isSmallMobile || isLargeMobile) {
      range = heightRanges.default;
    } else if (isTablet) {
      range = heightRanges.md;
    } else if (isLaptop) {
      range = heightRanges.lg;
    } else if (isDesktop) {
      range = heightRanges.xl;
    } else {
      return generateHeights(heightRanges.default); // Fallback to default range
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

  // Calculate the maximum height plus 10vh for the container
  const containerHeight = useMemo(() => {
    const maxHeight = Math.max(...calculatedHeights);
    return `${maxHeight + 10}vh`;
  }, [calculatedHeights]);

  return (
    <div className='relative' style={{ height: containerHeight }}>
      <div className='w-full absolute z-[2]'>
        <Marquee pauseOnClick pauseOnHover autoFill className='space-x-3'>
          {galleryMarqueeMedia.map((media, index) => {
            const height = calculatedHeights[index] ?? 30; // Fallback height if undefined

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
                className='h-full text-darker uppercase font-berlingske-serif text-2xl lg:text-3xl font-semibold '
              >
                <span className='mx-5'>{hoveredImage?.name}</span>
              </Marquee>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && clickedImage.image && (
          <Modal
            onClose={() => setIsModalOpen(false)}
            className='fixed inset-0 bg-darker z-50 flex-col-center py-16 space-y-8 text-center text-white font-berlingske-serif'
          >
            <Image
              src={clickedImage.image}
              className={cn('size-full object-contain')}
              alt={clickedImage.name}
            />
            <div className='capitalize text-xl lg:text-2xl'>
              {clickedImage.name}
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryMarquee;
