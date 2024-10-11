import Image from '@/components/common/image';
import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';
import { useEffect, useState, useCallback } from 'react';
import Video from './video';

interface MediaProps {
  src: string;
  className?: string;
  alt?: string;
}

const Media = ({ src, className, alt }: MediaProps) => {
  const [mediaType, setMediaType] = useState<'image' | 'video' | 'unknown'>(
    'unknown'
  );

  const [hasError, setHasError] = useState(false);

  const getMediaType = useCallback(
    (url: string): 'image' | 'video' | 'unknown' => {
      if (typeof url !== 'string') return 'unknown';

      const extension = url?.split('.')?.pop()?.toLowerCase();

      if (['jpg', 'jpeg', 'png', 'gif'].includes(extension || ''))
        return 'image';
      if (['mp4', 'webm', 'ogg'].includes(extension || '')) return 'video';
      return 'unknown';
    },
    []
  );

  useEffect(() => {
    if (src) {
      const type = getMediaType(src);
      if (type !== mediaType) {
        setMediaType(type);
      }
    }
  }, [src, mediaType, getMediaType]);

  const handleMediaError = () => {
    setHasError(true);
  };

  const Error = () => (
    <div className={cn(`relative`, className)}>
      <div className='flex items-center justify-center w-full h-full'>
        <ImageIcon />
      </div>
    </div>
  );

  if (hasError || !src) {
    return <Error />;
  }

  return (
    <div className={cn(`relative`, className)}>
      {mediaType === 'video' ? (
        <Video src={src} onError={handleMediaError} />
      ) : (
        <Image
          src={src}
          alt={alt}
          onError={handleMediaError}
          className={cn('w-full h-full object-cover')}
        />
      )}
    </div>
  );
};

export default Media;
