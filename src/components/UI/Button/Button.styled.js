import styled from 'styled-components';

export const Btn = styled.button`
  font-family: inherit;
  font-weight: 700;
  font-size: 20px;

  cursor: pointer;
  min-width: 120px;
  padding: 10px 15px;
  background-color: rgba(0, 0, 0, 0.6);

  border-radius: 5px;
  margin: 0 auto;
  border: none;
  transition: color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &:focus,
  &:hover {
    color: #fff;
    transform: scale(0.9);
  }
`;
