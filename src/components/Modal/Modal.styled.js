import { Link } from 'react-router-dom';

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

export const ModalBtn = styled(Link)`
  display: block;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.6);
`;
