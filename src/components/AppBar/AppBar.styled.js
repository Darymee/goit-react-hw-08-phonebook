import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px 14px;
`;

export const LogoLink = styled.a`
  font-weight: 700;

  color: #fff;
  text-decoration: none;
  font-size: 30px;
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const MenuBtn = styled.button`
  cursor: pointer;

  position: absolute;
  top: 10px;
  left: 84%;
  background-color: transparent;
  border: none;

  & > svg {
    stroke: #fff;
    width: 30px;
    height: 30px;
  }
`;

export const NavItem = styled.li`
  margin-top: 15px;
`;

export const NavLinks = styled(NavLink)`
  font-size: 22px;
  display: flex;
  align-items: center;

  color: #fff;
  text-decoration: none;

  padding: 10px 0;

  border-radius: 5px;

  &.active {
    background-color: rgba(0, 0, 0, 0.6);
  }

  & > svg {
    /* fill: #fff; */
    stroke: #fff;
    margin-right: 10px;

    width: 22px;
    height: 22px;
  }
`;
