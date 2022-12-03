import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppBar } from '../AppBar/AppBar';

import { PhonebookWrap } from './Layout.styled';

export const Layout = () => {
  return (
    <PhonebookWrap>
      <AppBar />
      <Outlet />
      <ToastContainer />
    </PhonebookWrap>
  );
};
