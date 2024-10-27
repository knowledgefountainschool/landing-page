import { createContext, useState, ReactNode } from 'react';

type HeaderContextType = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  show: boolean;
  handleShow: (value: boolean) => void;
};

export const HeaderContext = createContext<HeaderContextType | undefined>(
  undefined
);

const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState(false);
  const [show, handleShow] = useState(false);

  return (
    <HeaderContext.Provider value={{ isActive, setIsActive, show, handleShow }}>
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderProvider };
