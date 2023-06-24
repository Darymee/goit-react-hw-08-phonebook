import styled from 'styled-components';

export const TableWrapper = styled.div`
  padding: 0 10px;
  box-sizing: border-box;
`;

export const Table = styled.table`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const TableHead = styled.th`
  color: white;
  font-size: ${p => (p.isMobile ? '16px' : '18px')};
  text-align: left;
  padding-bottom: 15px;
  min-width: 20px;
`;
