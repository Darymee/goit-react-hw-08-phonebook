import styled from 'styled-components';

export const PhoneBookWrap = styled.div`
  display: ${p => (p.isTablet ? 'grid' : null)};
  grid-template-columns: auto;
`;
