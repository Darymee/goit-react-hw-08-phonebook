import styled from 'styled-components';

export const LogoLink = styled.a`
  font-weight: 700;
  display: block;

  color: #fff;
  text-decoration: none;
  font-size: ${p => (p.isOpen ? '30px' : '35px')};
  text-align: ${p => (p.isDesktop ? null : 'center')};
`;

export const MenuBtn = styled.button`
  cursor: pointer;

  padding: 2px;
  display: flex;
  align-items: center;

  position: absolute;

  top: 12px;
  transition: background-color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 5px;
  left: ${p => (p.isOpen ? '84%' : '58%')};

  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
  }

  & > svg {
    stroke: #fff;
    fill: #fff;

    width: ${p => (p.isOpen ? '30px' : '35px')};
    height: ${p => (p.isOpen ? '30px' : '35px')};
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const MenuBtnMob = styled.button`
  cursor: pointer;

  padding: 2px;
  display: flex;
  align-items: center;

  transition: background-color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 5px;

  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
  }

  & > svg {
    stroke: #fff;
    width: 35px;
    height: 35px;
  }
`;
