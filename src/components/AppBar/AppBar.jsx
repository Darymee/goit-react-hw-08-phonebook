import { useState } from 'react';

import { TbMenu2, TbHome2, TbUser, TbLogin, TbUserPlus } from 'react-icons/tb';

import {
  Header,
  LogoLink,
  NavMenu,
  MenuBtn,
  NavLinks,
  NavItem,
} from './AppBar.styled';

export const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleBar = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <Header>
      <div>
        <LogoLink href="/goit-react-hw-08-phonebook/">Phonebook</LogoLink>
      </div>
      <MenuBtn type="button" onClick={toogleBar}>
        <TbMenu2 />
      </MenuBtn>
      <NavMenu>
        <ul>
          <NavItem>
            <NavLinks to={'/'} end>
              <TbHome2 />
              {isOpen && <span>Home</span>}
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to={'/contacts'}>
              <TbUser />
              {isOpen && <span>Contacts</span>}
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to={'/register'}>
              <TbUserPlus />
              {isOpen && <span>Sign Up</span>}
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to={'/login'}>
              <TbLogin />
              {isOpen && <span> Sing In</span>}
            </NavLinks>
          </NavItem>
        </ul>
      </NavMenu>
    </Header>
  );
};
