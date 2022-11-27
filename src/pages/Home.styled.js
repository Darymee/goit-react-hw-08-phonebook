import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 700px;
  height: 400px;

  margin: 200px auto;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 35px;
  text-align: center;
  color: #fff;

  margin-bottom: 15px;
`;

export const TitleLink = styled.button`
  display: block;
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  color: black;
  background-color: transparent;
  border: none;

  margin-bottom: 15px;
`;
