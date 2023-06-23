import styled from 'styled-components';

export const Wrapp = styled.div`
  box-sizing: border-box;
  width: ${p => p.width};
  height: ${p => p.height};

  margin: ${p => (p.mr ? p.mr : '150px auto')};

  padding: ${p => (p.pd ? p.pd : '40px')};

  min-width: ${p => (p.minw ? p.minw : null)};

  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 1px 7px 38px -11px rgba(0, 0, 0, 0.84);
  border: 1px rgba(0, 0, 0, 0.6) solid;
`;
