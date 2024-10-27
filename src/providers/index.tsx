import * as React from 'react';
import { ScrollerProvider } from './scroller';
import { HeaderProvider } from './header';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeaderProvider>
      <ScrollerProvider>{children}</ScrollerProvider>
    </HeaderProvider>
  );
};

export default Providers;
