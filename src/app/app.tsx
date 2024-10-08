import { BrowserRouter } from 'react-router-dom';
import Router from '@/components/layout/router';
import Providers from '@/providers';
import Header from '@/components/layout/header';
import Main from '@/components/layout/main';
import Footer from '@/components/layout/footer';

export function App() {
  return (
    <BrowserRouter>
      <Providers>
        <div className='relative font-san-francisco font-normal w-full max-w-screen bg-brand text-darker'>
          <Header />
          <Main>
            <Router />
          </Main>
          <Footer />
        </div>
      </Providers>
    </BrowserRouter>
  );
}
