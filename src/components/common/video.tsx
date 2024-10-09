import { FC } from 'react';

interface VideoProps {
  src: string[];
  className?: string;
  onLoad?: () => void;
}

const Video: FC<VideoProps> = ({ className, src: [mp4Src], onLoad }) => {
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
      className={`${className} object-cover w-full h-full`}
    >
      <source src={`${mp4Src}`} type='video/mp4' />
      {/* <source src={`${webmSrc}`} type='video/webm' /> */}
    </video>
  );
};

export default Video;
