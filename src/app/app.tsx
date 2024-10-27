import { BrowserRouter } from 'react-router-dom';
import Router from '@/components/layout/router';
import Providers from '@/providers';

import Main from '@/components/layout/main';
import Footer from '@/components/layout/footer';
import { PageLoader } from '@/components/layout/loader';
import React from 'react';
import useMediaQuery from '@/hooks/use-media-query';
import DesktopHeader from '@/components/layout/desktop-header';
import MobileHeader from '@/components/layout/mobile-header';
import { Navbar } from '@/components/layout/navbar';
import AudioPlayer from '@/components/layout/audio-player';
import { audio } from '@/lib/db';

export function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const { lg } = useMediaQuery();
  return (
    <BrowserRouter>
      <Providers>
        <div className='relative font-san-francisco font-normal w-full max-w-screen bg-brand text-darker'>
          {isLoading && (
            <PageLoader onLoadingComplete={() => setIsLoading(false)} />
          )}
          {lg ? <DesktopHeader /> : <MobileHeader />}
          <Navbar />
          <Main>
            <Router />
          </Main>
          <Footer />
          <AudioPlayer playlist={audio} />
        </div>
      </Providers>
    </BrowserRouter>
  );
}
