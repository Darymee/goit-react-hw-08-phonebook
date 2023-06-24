import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/UI/Loader';

import { PhoneBookWrap } from './Layout.styled';
import { useMedia } from 'react-use';

const Layout = () => {
  const isTablet = useMedia('(min-width:769px)');

  return (
    <PhoneBookWrap isTablet={isTablet}>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer limit={3} />
    </PhoneBookWrap>
  );
};
export default Layout;
