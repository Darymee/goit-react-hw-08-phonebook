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
