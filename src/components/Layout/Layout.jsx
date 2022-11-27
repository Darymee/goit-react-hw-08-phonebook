import { Outlet } from 'react-router-dom';

import { AppBar } from '../AppBar/AppBar';

import { PhonebookWrap } from './Layout.styled';

export const Layout = () => {
  return (
    <PhonebookWrap>
      <AppBar />
      <Outlet />
    </PhonebookWrap>
  );
};
