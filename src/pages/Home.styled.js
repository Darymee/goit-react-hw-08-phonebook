import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 700px;
  height: 400px;

  margin: 0px auto;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px rgba(0, 0, 0, 0.6) solid;

  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 1px 7px 38px -11px rgba(0, 0, 0, 0.84);
`;

export const TitleLink = styled.button`
  font-family: inherit;

  font-size: 30px;
  font-weight: 700;

  display: block;
  cursor: pointer;

  color: black;
  background-color: transparent;
  border: none;

  margin-bottom: 15px;

  transition: color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:hover,
  &:focus {
    color: #fff;
  }
`;
