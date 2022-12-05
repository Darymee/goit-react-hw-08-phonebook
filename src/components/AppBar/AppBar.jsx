import { useSelector } from 'react-redux';

import { useLocalStorage } from 'hooks/useLocalStorage';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpen, setIsOpen] = useLocalStorage('sideBarWidth', false);

  const toogleBar = () => setIsOpen(!isOpen);

  return (
    <Header
      animate={{
        width: isOpen ? '280px' : '90px',
        padding: isOpen ? '10px 14px' : '10px 10px',
        transition: {
          duration: 0.5,
          type: 'spring',
          damping: 10,
        },
      }}
    >
      <Navigation isOpen={isOpen} toggleBar={toogleBar} />
      {isLoggedIn ? <UserMenu isOpen={isOpen} /> : <AuthNav isOpen={isOpen} />}
    </Header>
  );
};
