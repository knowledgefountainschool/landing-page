import { TheaterContext } from '@/providers/theater-mode';
import { useContext } from 'react';

const useTheaterMode = () => {
  const theaterContext = useContext(TheaterContext);

  if (!theaterContext) {
    throw new Error('TheaterMode must be used within a Provider');
  }

  const { isTheaterMode, toggleTheaterMode } = theaterContext;

  return {
    isTheaterMode,
    toggleTheaterMode,
  };
};

export default useTheaterMode;
