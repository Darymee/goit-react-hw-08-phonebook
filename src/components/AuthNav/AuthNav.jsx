import PropTypes from 'prop-types';

import { navItems } from 'constance/navItems';

import { NavItem } from 'components/NavItem/NavItem';

import { NavMenu } from './AuthNav.styled';

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

AuthNav.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
