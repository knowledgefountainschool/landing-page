import { useState, useEffect, useRef } from 'react';
import { optimizeCloudinaryAudio } from '@/lib/utils';
import useTheaterMode from '@/hooks/use-theater-mode';

interface AudioPlayerProps {
  playlist: { mp3: string; aac: string }[];
}

const AudioPlayer = ({ playlist }: AudioPlayerProps) => {
  const { isTheaterMode } = useTheaterMode();
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const getTrackSource = () => {
    const currentTrack = playlist[currentTrackIndex];
    return optimizeCloudinaryAudio(currentTrack.aac || currentTrack.mp3);
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isTheaterMode) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isTheaterMode]);

  const handleTrackEnd = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current && isTheaterMode) {
      audioRef.current.play();
    }
  }, [currentTrackIndex, isTheaterMode]);

  return (
    <audio
      ref={audioRef}
      src={getTrackSource()}
      onEnded={handleTrackEnd}
      preload='metadata'
      className='fixed top-0 left-0 opacity-0 pointer-events-none'
    />
  );
};

export default AudioPlayer;
