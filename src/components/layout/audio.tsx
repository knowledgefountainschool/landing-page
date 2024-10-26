import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn, optimizeCloudinaryAudio } from '@/lib/utils';
import { dotVariants, playerVariants } from '@/lib/anim';

interface AudioPlayerProps {
  playlist: { mp3: string; aac: string }[];
  className?: string;
}

const AudioPlayer = ({ playlist, className }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const controlHideTimeout = useRef<NodeJS.Timeout>();

  const getTrackSource = () => {
    const currentTrack = playlist[currentTrackIndex];
    return optimizeCloudinaryAudio(currentTrack.aac || currentTrack.mp3);
  };

  const resetControlTimeout = (seconds: number) => {
    if (controlHideTimeout.current) clearTimeout(controlHideTimeout.current);
    controlHideTimeout.current = setTimeout(
      () => setShowControls(false),
      seconds * 1000
    );
  };

  useEffect(() => {
    setShowControls(true);
    resetControlTimeout(10);

    return () => {
      if (controlHideTimeout.current) clearTimeout(controlHideTimeout.current);
    };
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTrackEnd = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrackIndex, isPlaying]);

  return (
    <motion.div
      className={cn(
        'fixed right-0 top-3/4 lg:top-1/2 lg:-translate-y-1/2 flex items-center gap-2 z-50 h-11 pl-5 pr-10 rounded-l-full cursor-pointer ',
        className
      )}
      variants={playerVariants}
      initial='hidden'
      animate='visible'
      whileHover='hover'
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => resetControlTimeout(0.005)}
      onClick={handlePlayPause}
    >
      {/* Background with blur */}
      <div className='absolute inset-0 backdrop-blur-sm bg-darker/50 rounded-l-full border-l border-y border-white' />

      {/* Content */}
      <div className='relative z-10 flex items-center gap-2'>
        <motion.div
          variants={dotVariants}
          animate={isPlaying ? 'playing' : 'idle'}
          className='size-1.5 bg-white rounded-full cursor-pointer'
        />

        <AnimatePresence mode='wait'>
          {showControls && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              className='text-white text-sm font-medium select-none cursor-pointer'
            >
              sound {isPlaying ? 'off' : 'on'}?
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <audio
        ref={audioRef}
        src={getTrackSource()}
        onEnded={handleTrackEnd}
        className='hidden'
        preload='metadata'
      />
    </motion.div>
  );
};

export default AudioPlayer;
