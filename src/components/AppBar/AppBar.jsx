import { useSelector } from 'react-redux';

import { useLocalStorage } from 'hooks/useLocalStorage';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpen, setisOpen] = useLocalStorage('sideBarWidth', false);

  const toogleBar = () => {
    setisOpen(!isOpen);

    return;
  };

  return (
    <Header isOpen={isOpen}>
      <Navigation isOpen={isOpen} toogleBar={toogleBar} />
      {isLoggedIn ? <UserMenu isOpen={isOpen} /> : <AuthNav isOpen={isOpen} />}
    </Header>
  );
};
