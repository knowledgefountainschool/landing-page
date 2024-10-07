import * as React from 'react';
import { ScrollerProvider } from './scroller';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollerProvider>
     {children}
    </ScrollerProvider>
  );
};

export default Providers;
