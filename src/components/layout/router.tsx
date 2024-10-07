import NotFoundPage from '@/app/404';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '@/app/home';

const Router = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
