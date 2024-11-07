import * as React from 'react';
import { Progress } from '@/components/common/progress';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from '@/components/common/icons';
import { cn } from '@/lib/utils';
import { anim, pageSlide } from '@/lib/anim';

interface PageLoaderProps {
  onLoadingComplete?: () => void;
}

export const PageLoader = ({ onLoadingComplete }: PageLoaderProps) => {
  const [progress, setProgress] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(true);
  const progressIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = React.useRef<number | null>(null);

  const isHTMLImageElement = (element: Element): element is HTMLImageElement =>
    element instanceof HTMLImageElement;

  const isHTMLVideoElement = (element: Element): element is HTMLVideoElement =>
    element instanceof HTMLVideoElement;

  React.useEffect(() => {
    setProgress(0);

    const minLoadTime = 3500;

    const resources = Array.from(
      document.querySelectorAll(
        'img, video, audio, script, link[rel="stylesheet"]'
      )
    );
    let loadedResources = 0;

    const updateProgress = () => {
      // Only start counting time once the first resource starts loading
      if (startTimeRef.current === null && loadedResources > 0) {
        startTimeRef.current = Date.now();
      }

      let timeProgress = 0;
      if (startTimeRef.current !== null) {
        const elapsedTime = Date.now() - startTimeRef.current;
        timeProgress = Math.min((elapsedTime / minLoadTime) * 100, 100);
      }

      const resourceProgress = resources.length
        ? (loadedResources / resources.length) * 100
        : 100;

      const combinedProgress = Math.min(
        Math.max(timeProgress, resourceProgress),
        100
      );
      setProgress(Math.floor(combinedProgress));

      if (combinedProgress >= 100) {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
        }
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }
    };

    const onResourceLoad = () => {
      loadedResources++;
      updateProgress();
    };

    resources.forEach((resource) => {
      if (isHTMLImageElement(resource)) {
        if (resource.complete) {
          loadedResources++;
        } else {
          resource.addEventListener('load', onResourceLoad);
          resource.addEventListener('error', onResourceLoad);
        }
      } else if (isHTMLVideoElement(resource)) {
        if (resource.readyState >= 3) {
          loadedResources++;
        } else {
          resource.addEventListener('canplay', onResourceLoad);
          resource.addEventListener('error', onResourceLoad);
        }
      } else {
        resource.addEventListener('load', onResourceLoad);
        resource.addEventListener('error', onResourceLoad);
      }
    });

    progressIntervalRef.current = setInterval(updateProgress, 50);

    updateProgress();

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      resources.forEach((resource) => {
        if (isHTMLImageElement(resource) || isHTMLVideoElement(resource)) {
          resource.removeEventListener('load', onResourceLoad);
          resource.removeEventListener('canplay', onResourceLoad);
        }
        resource.removeEventListener('error', onResourceLoad);
      });
    };
  }, []);

  return (
    <AnimatePresence mode='wait' onExitComplete={() => onLoadingComplete?.()}>
      {isVisible && (
        <motion.div
          {...anim(pageSlide)}
          className='fixed inset-0 flex flex-col items-center justify-center bg-darker z-[999] font-cormorant-garamond'
        >
          <motion.div className='flex flex-col items-center justify-center space-y-8'>
            <div
              className={cn(
                'size-32 p-5',
                'shadow shadow-lighter',
                'flex bg-white rounded-full'
              )}
            >
              <Icons.logo />
            </div>
            <p className='text-light mb-4 text-3xl font-medium'>{progress}%</p>
            <Progress
              value={progress}
              className='w-[20rem] h-2'
              aria-label={`progress: ${progress}%`}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
