import { FC } from 'react';
import Image from './image';
import { optimizeCloudinaryVideo } from '@/lib/utils';
import useMediaQuery from '@/hooks/use-media-query';

interface VideoProps {
  src: string;
  fallbackImage: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  alt?: string;
}

const Video: FC<VideoProps> = ({
  src,
  alt,
  fallbackImage,
  className,
  onLoad,
  onError,
}) => {
  const optimizedVideoUrl = optimizeCloudinaryVideo(src);
  const { lg } = useMediaQuery();

  if (!lg) {
    return (
      <Image
        src={fallbackImage}
        alt={alt}
        className={`${className} object-cover w-full h-full`}
      />
    );
  }

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
      <source src={optimizedVideoUrl} type='video/mp4' />
    </video>
  );
};

export default Video;
