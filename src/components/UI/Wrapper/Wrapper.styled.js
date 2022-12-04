import styled from 'styled-components';

export const Wrapp = styled.div`
  width: ${p => p.width};
  height: ${p => p.height};

  margin: ${p => {
    if (!p.mr) {
      return '150px auto';
    }
    return p.mr;
  }};
  padding: ${p => {
    if (!p.pd) {
      return '40px';
    }
    return p.pd;
  }};

  min-width: ${p => {
    if (!p.minw) {
      return;
    }
    return p.minw;
  }};

  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 1px 7px 38px -11px rgba(0, 0, 0, 0.84);
  border: 1px rgba(0, 0, 0, 0.6) solid;
`;
