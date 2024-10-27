import React, { createContext, useState, useCallback } from 'react';

interface TheaterContextType {
  isTheaterMode: boolean;
  toggleTheaterMode: () => void;
}

export const TheaterContext = createContext<TheaterContextType | undefined>(undefined);

export const TheaterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isTheaterMode, setIsTheaterMode] = useState(false);

  const toggleTheaterMode = useCallback(() => {
    setIsTheaterMode((prev) => !prev);
  }, []);

  return (
    <TheaterContext.Provider value={{ isTheaterMode, toggleTheaterMode }}>
      {children}
    </TheaterContext.Provider>
  );
};
