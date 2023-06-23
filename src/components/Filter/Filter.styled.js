import styled from 'styled-components';

export const FilterWrap = styled.div`
  display: flex;
`;

export const FilterInput = styled.input`
  display: block;

  padding-left: 10px;
  margin-bottom: 20px;

  width: 100%;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;

  border-radius: 5px;

  font-size: 18px;

  font-family: inherit;
  font-weight: 600;

  transition: background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
