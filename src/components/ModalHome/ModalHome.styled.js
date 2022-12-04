import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
`;

export const ButtonItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;
