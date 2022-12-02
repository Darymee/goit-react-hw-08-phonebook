import styled from 'styled-components';

export const MainTitle = styled.h1`
  font-size: ${p => {
    if (!p.size) {
      return '35px';
    }
    return p.size;
  }};

  margin-bottom: ${p => {
    if (!p.mb) {
      return '35px';
    }
    return p.mb;
  }};
  text-align: center;
  color: #fff;
`;
