import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: ${p => {
    if (p.isOpen) {
      return '10px 14px';
    }
    return '10px 10px';
  }};
  width: ${p => {
    if (p.isOpen) {
      return '280px';
    }
    return '90px';
  }};
`;

export const LogoLink = styled.a`
  font-weight: 700;

  color: #fff;
  text-decoration: none;
  font-size: ${p => {
    if (p.isOpen) {
      return '30px';
    }
    return '35px';
  }};
`;

export const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const MenuBtn = styled.button`
  cursor: pointer;

  padding: 0 2px;
  align-items: center;

  position: absolute;

  top: 12px;
  transition: background-color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 5px;
  left: ${p => {
    if (p.isOpen) {
      return '84%;';
    }
    return '58%';
  }};

  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
  }

  & > svg {
    stroke: #fff;
    fill: #fff;

    width: ${p => {
      if (p.isOpen) {
        return '30px';
      }
      return '35px';
    }};
    height: ${p => {
      if (p.isOpen) {
        return '30px';
      }
      return '35px';
    }};
  }
`;
