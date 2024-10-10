import { User, LucideProps } from 'lucide-react';
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
  longArrowWhite: (props: LucideProps) => (
    <svg
      viewBox='0 0 17 83'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.5 1V82M8.5 82C14.5 75.5 12.5 77.5 16.5 73M8.5 82C3.5 76.5 5.5 78.5 0.5 73'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  ),
  longArrowDarker: (props: LucideProps) => (
    <svg
      viewBox='0 0 17 83'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8.5 1V82M8.5 82C14.5 75.5 12.5 77.5 16.5 73M8.5 82C3.5 76.5 5.5 78.5 0.5 73'
        stroke='#2b2f46'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  ),
};
