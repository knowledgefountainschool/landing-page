import * as React from 'react';
import { ScrollerProvider } from './scroller';
import { HeaderProvider } from './header';
import { TheaterProvider } from './theater-mode';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeaderProvider>
      <TheaterProvider>
        <ScrollerProvider>{children}</ScrollerProvider>
      </TheaterProvider>
    </HeaderProvider>
  );
};

export default Providers;
