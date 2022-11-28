import { SideBarLink, NavLi } from './NavItem.styled';

export const NavItem = ({ href, text, Icon, isOpen }) => {
  return (
    <NavLi status={isOpen}>
      <SideBarLink to={href} end>
        <Icon />
        {isOpen && <span>{text}</span>}
      </SideBarLink>
    </NavLi>
  );
};
