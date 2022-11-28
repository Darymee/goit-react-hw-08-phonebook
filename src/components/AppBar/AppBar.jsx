import { useState } from 'react';

import { useLocalStorage } from 'hooks/useLocalStorage';

import { TbMenu2, TbHome2, TbUser, TbLogin, TbUserPlus } from 'react-icons/tb';
import { BsArrowBarLeft } from 'react-icons/bs';

import { NavItem } from 'components/NavItem/NavItem';

import { Header, LogoLink, NavMenu, MenuBtn } from './AppBar.styled';

const navItems = [
  { href: '/', text: 'Home', icon: TbHome2 },
  { href: 'register', text: 'Sign Up', icon: TbUserPlus },
  { href: 'login', text: 'Sign In', icon: TbLogin },
];

// <NavItem>
//   <NavLinks to={'/contacts'}>
//     <TbUser />
//     {isOpen && <span>Contacts</span>}
//   </NavLinks>
// </NavItem>;

export const AppBar = () => {
  const [isOpen, setisOpen] = useLocalStorage('sideBarWidth', false);

  const toogleBar = () => {
    setisOpen(!isOpen);

    return;
  };

  return (
    <Header isOpen={isOpen}>
      <div>
        <LogoLink href="/">{!isOpen ? 'PB' : 'Phonebook'}</LogoLink>
      </div>
      <MenuBtn type="button" onClick={toogleBar} isOpen={isOpen}>
        {isOpen ? <BsArrowBarLeft /> : <TbMenu2 />}
      </MenuBtn>
      <NavMenu>
        <ul>
          {navItems.map(({ href, text, icon }) => (
            <NavItem
              key={text}
              href={href}
              text={text}
              Icon={icon}
              isOpen={isOpen}
            />
          ))}
        </ul>
      </NavMenu>
    </Header>
  );
};
