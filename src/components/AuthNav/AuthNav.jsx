import { TbUserPlus, TbLogin } from 'react-icons/tb';

import { NavItem } from 'components/NavItem/NavItem';

import { NavMenu } from './AuthNav.styled';

const navItems = [
  { href: 'register', text: 'Sign Up', icon: TbUserPlus },
  { href: 'login', text: 'Sign In', icon: TbLogin },
];

export const AuthNav = ({ isOpen }) => {
  return (
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
  );
};
