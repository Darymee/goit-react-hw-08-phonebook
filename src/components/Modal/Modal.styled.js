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
  font-family: inherit;

  display: block;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 20px;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.6);
  transition: color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &:focus,
  &:hover {
    color: #fff;
    transform: scale(0.9);
  }
`;
