import { galleryMarqueeMedia } from '@/lib/db';
import Marquee from 'react-fast-marquee';
// import Image from './image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useMemo, useCallback } from 'react';
import { anim, opacity, translate } from '@/lib/anim';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/use-media-query';
import Media from './media';

interface GalleryMarqueeProps {}

const GalleryMarquee = ({}: GalleryMarqueeProps) => {
  const [selectedImage, setSelectedImage] = useState({
    isActive: false,
    index: 0,
    name: '',
    image: '',
    video: '',
  });

  const { isSmallMobile, isLargeMobile, isTablet, isLaptop, isDesktop } =
    useMediaQuery();

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
                  setSelectedImage({
                    isActive: true,
                    index,
                    name: media.name,
                    image: media.image,
                    video: media.video,
                  });
                }}
                onMouseLeave={() => {
                  setSelectedImage({
                    isActive: false,
                    index,
                    name: '',
                    image: '',
                    video: '',
                  });
                }}
                variants={opacity}
                animate={
                  selectedImage.isActive && selectedImage.index !== index
                    ? 'open'
                    : 'closed'
                }
              >
                <Media
                  src={media?.video ? media?.video : media.image}
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
        {selectedImage?.name && (
          <div className='w-full absolute z-[1] top-14'>
            <motion.div className='h-full' {...anim(translate)}>
              <Marquee
                direction='right'
                autoFill
                className='h-full text-darker uppercase font-berlingske-serif text-2xl lg:text-3xl font-semibold '
              >
                <span className='mx-5'>{selectedImage?.name}</span>
              </Marquee>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryMarquee;
