import styled from 'styled-components';

export const TableCell = styled.td`
  color: white;
  font-size: 18px;
  font-weight: 600;

  padding-bottom: 15px;
  padding-right: 15px;
  & svg {
    width: 25px;
    height: 25px;
    stroke: white;
  }
`;

export const BtnTool = styled.button`
  cursor: pointer;

  display: block;
  margin: 0 auto;
  padding: 5px 10px;

  background-color: transparent;
  border-radius: 5px;
  border: none;

  transition: background-color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
    transform: scale(0.9);
  }

  & svg {
    width: 25px;
    height: 25px;
    stroke: white;
  }
`;
