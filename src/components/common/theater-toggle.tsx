import { Switch } from '../common/switch';
import { AudioLines } from 'lucide-react';
import useMediaQuery from '@/hooks/use-media-query';
import useTheaterMode from '@/hooks/use-theater-mode';
import { cn } from '@/lib/utils';

interface TheaterToggleProps {
  className?: string;
}

const TheaterToggle = ({ className }: TheaterToggleProps) => {
  const { isTheaterMode, toggleTheaterMode } = useTheaterMode();
  const { lg } = useMediaQuery();

  return (
    <div className={`flex items-center gap-2 ${className || ''}`}>
      <Switch checked={isTheaterMode} onCheckedChange={toggleTheaterMode} />
      {lg ? (
        <AudioLines
          className={cn(
            'transition-transform duration-500',
            isTheaterMode ? 'rotate-180 text-darker animate-subtlePulse' : ''
          )}
        />
      ) : (
        <span className='text-sm capitalize text-white font-san-francisco font-bold flex items-center gap-2'>
          <AudioLines
            className={cn(
              'transition-transform duration-500',
              isTheaterMode ? 'rotate-180 text-brand animate-subtlePulse' : ''
            )}
          />
        </span>
      )}
    </div>
  );
};

export default TheaterToggle;
