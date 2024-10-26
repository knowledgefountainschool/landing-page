import { BrowserRouter } from 'react-router-dom';
import Router from '@/components/layout/router';
import Providers from '@/providers';
import Header from '@/components/layout/header';
import Main from '@/components/layout/main';
import Footer from '@/components/layout/footer';
import { PageLoader } from '@/components/layout/loader';
import React from 'react';
import Audio from '@/components/layout/audio';
import { audio } from '@/lib/db';

export function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <BrowserRouter>
      <Providers>
        <div className='relative font-san-francisco font-normal w-full max-w-screen bg-brand text-darker'>
          {isLoading && (
            <PageLoader onLoadingComplete={() => setIsLoading(false)} />
          )}
          <Header />
          <Main>
            <Router />
          </Main>
          <Audio playlist={audio} />
          <Footer />
        </div>
      </Providers>
    </BrowserRouter>
  );
}
