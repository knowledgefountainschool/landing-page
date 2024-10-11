import { FC } from 'react';

interface VideoProps {
  src: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const Video: FC<VideoProps> = ({ className, src, onLoad, onError }) => {
  return (
    <video
      data-nosnippet
      playsInline
      disablePictureInPicture
      preload='metadata'
      loop
      muted
      autoPlay
      onLoad={onLoad}
      onError={onError}
      className={`${className} object-cover w-full h-full`}
    >
      <source src={src} type='video/mp4' />
    </video>
  );
};

export default Video;
