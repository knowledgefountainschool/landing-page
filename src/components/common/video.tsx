import { FC } from 'react';

interface VideoProps {
  src: string[];
  className?: string;
}

const Video: FC<VideoProps> = ({ className, src: [mp4Src] }) => {
  return (
    <video
      data-nosnippet
      playsInline
      disablePictureInPicture
      preload='metadata'
      loop
      muted
      autoPlay
      className={`${className} object-cover w-full h-full`}
    >
      <source src={`${mp4Src}`} type='video/mp4' />
      {/* <source src={`${webmSrc}`} type='video/webm' /> */}
    </video>
  );
};

export default Video;
