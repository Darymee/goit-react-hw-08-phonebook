import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader';

import { PhonebookWrap } from './Layout.styled';

const Layout = () => {
  return (
    <PhonebookWrap>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer limit={3} />
    </PhonebookWrap>
  );
};
export default Layout;
