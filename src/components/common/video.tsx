import { FC } from 'react';

interface VideoProps {
  src: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const optimizeCloudinaryVideo = (url: string): string => {
  // Find the position after "upload/"
  const uploadIndex = url.indexOf('upload/');
  if (uploadIndex === -1) return url;

  const insertPosition = uploadIndex + 7; // "upload/".length = 7

  // Insert optimization parameters
  const optimizedUrl =
    url.slice(0, insertPosition) +
    'q_auto,f_auto,c_scale,w_auto/' +
    url.slice(insertPosition);

  return optimizedUrl;
};

const Video: FC<VideoProps> = ({ src, className, onLoad, onError }) => {
  const optimizedVideoUrl = optimizeCloudinaryVideo(src);

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
