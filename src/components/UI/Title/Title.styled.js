import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-size: ${p => (p.size ? p.size : '35px')};

  margin-bottom: ${p => (p.mb ? p.mb : '35px')};
  text-align: center;
  color: #fff;
`;
