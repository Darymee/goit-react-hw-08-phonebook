import styled from 'styled-components';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export const FormWrap = styled.div`
  margin: 20px auto;
  border: 1px solid black;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 10px 10px 53px -22px rgba(0, 0, 0, 0.75);
  width: 300px;
  margin-bottom: 30px;
  box-shadow: 10px 10px 108px 32px rgba(71, 71, 71, 0.79);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrap = styled.div`
  position: relative;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    margin-right: 18px;
    width: 28px;
    height: 28px;

    top: 50%;
    left: 7px;
  }
`;

export const Input = styled.input`
  font-size: 18px;

  font-family: inherit;

  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  padding-left: 15px;

  display: block;

  width: 100%;
  height: 30px;
  border-radius: 5px;
  &::placeholder {
    color: white;
  }

  transition: border-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const NumberInput = styled(PhoneInput)`
  margin-bottom: 30px;
  font-family: inherit;
  & input {
    color: white;
    font-size: 18px;

    background-color: rgba(0, 0, 0, 0.3);

    padding-left: 15px;

    height: 30px;
    border-radius: 5px;
    transition: border-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;
