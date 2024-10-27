import { HeaderContext } from '@/providers/header';
import { useContext, useEffect } from 'react';
import { useSectionObserver } from './use-section-observer';
import useHash from './use-hash';

const useNavbar = () => {
  const hash = useHash();
  const sectionIds = ['about', 'core-values', 'triple-a', 'donate', 'cta']; // Section IDs
  const activeSection = useSectionObserver(sectionIds);

  const selectedIndicator = `/#${activeSection}`; // Update indicator based on the active section

  const headerContext = useContext(HeaderContext);

  if (!headerContext) {
    throw new Error('MobileNavbar must be used within a HeaderProvider');
  }

  const { isActive, setIsActive } = headerContext;

  useEffect(() => {
    if (isActive) setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return {
    isActive,
    setIsActive,
    selectedIndicator,
    toggleNavbar,
  };
};

export default useNavbar;
