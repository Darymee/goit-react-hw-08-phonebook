import styled from 'styled-components';

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
