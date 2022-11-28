import styled from 'styled-components';

export const PhonebookWrap = styled.div`
  display: grid;
  grid-template-columns: ${p => {
    if (p.toggle) {
      return '308px 1fr';
    }
    return '107px 1fr';
  }};
`;
