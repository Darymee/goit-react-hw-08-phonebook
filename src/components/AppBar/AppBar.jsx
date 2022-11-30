import { useLocalStorage } from 'hooks/useLocalStorage';

// import { TbMenu2, TbHome2, TbUser, TbLogin, TbUserPlus } from 'react-icons/tb';

import { Header } from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

// <NavItem>
//   <NavLinks to={'/contacts'}>
//     <TbUser />
//     {isOpen && <span>Contacts</span>}
//   </NavLinks>
// </NavItem>;

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
      {isLoggedIn ? <UserMenu /> : <AuthNav isOpen={isOpen} />}
    </Header>
  );
};
