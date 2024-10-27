import { type ClassValue, clsx } from 'clsx';
import { useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

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

const optimizeCloudinaryAudio = (url: string): string => {
  const uploadIndex = url.indexOf('upload/');
  if (uploadIndex === -1) return url;

  const insertPosition = uploadIndex + 7;

  const optimizedUrl =
    url.slice(0, insertPosition) +
    'q_auto,f_auto,fl_attachment/' +
    url.slice(insertPosition);

  return optimizedUrl;
};

const usePathname = () => {
  const location = useLocation();
  return location.pathname;
};

export { cn, optimizeCloudinaryVideo, optimizeCloudinaryAudio, usePathname };
