import { useLocalStorage } from 'hooks/useLocalStorage';

import { Header } from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

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
