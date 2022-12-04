import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const NavLi = styled.li`
  margin-top: 20px;

  & svg {
    stroke: #fff;

    margin: ${p => {
      if (p.status) {
        return '0 10px 0 0';
      }
      return '0 auto';
    }};

    width: ${p => {
      if (p.status) {
        return '22px';
      }
      return '35px';
    }};
    height: ${p => {
      if (p.status) {
        return '22px';
      }
      return '35px';
    }};
  }
`;

export const SideBarLink = styled(NavLink)`
  font-size: 22px;
  display: flex;
  align-items: center;

  color: #fff;
  text-decoration: none;

  padding: 15px 15px;

  border-radius: 5px;

  &.active {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
