import PropTypes from 'prop-types';

import { SideBarLink, NavLi } from './NavItem.styled';

export const NavItem = ({ href, text, Icon, isOpen, onMobMenuClose }) => {
  return (
    <NavLi status={isOpen}>
      <SideBarLink
        to={href}
        end
        onClick={() =>
          onMobMenuClose(prevState => (prevState ? !prevState : false))
        }
      >
        <Icon />
        {isOpen && <span>{text}</span>}
      </SideBarLink>
    </NavLi>
  );
};

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
