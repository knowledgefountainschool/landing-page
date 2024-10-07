import { User } from 'lucide-react';
import { siteConfig } from '@/config/site';
import Image from './image';

const { siteName, images } = siteConfig;

export const Icons = {
  user: User,
  logo: ({ className }: { className?: string }) => (
    <Image
      src={images[0]}
      alt={`${siteName}'s logo`}
      width={192}
      height={192}
      className={`object-contain ${className}`}
    />
  ),
};
