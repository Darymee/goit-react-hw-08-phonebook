import styled from 'styled-components';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  width: 300px;

  padding: 40px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid black;

  position: relative;
`;

export const BtnClose = styled.button`
  cursor: pointer;

  display: block;

  padding: 5px 10px;
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  border-radius: 5px;
  transition: background-color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  & svg {
    width: 30px;
    height: 30px;
    fill: white;
  }
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
    transform: scale(0.9);
  }
`;

export const InputWrapp = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 30px;

  & > svg {
    top: -50px;
    left: -31px;
    width: 30px;
    height: 30px;
    stroke: white;
    margin-right: 15px;
  }
`;

export const Input = styled.input`
  width: -webkit-fill-available;

  font-size: 18px;

  font-family: inherit;

  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  outline: white;

  padding-left: 15px;

  display: block;

  height: 30px;
  border-radius: 5px;

  transition: border-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
    border-bottom: 1px solid white;
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
    transition: background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &:hover,
    &:focus {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
`;

export const BtnSubmit = styled.button`
  cursor: pointer;

  display: block;
  padding: 5px 10px;

  background-color: transparent;
  margin: 0 auto;
  border-radius: 5px;

  border: none;
  transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    background-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275),
    padding 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover,
  &:focus {
    transform: scale(0.9);

    background-color: rgba(0, 0, 0, 0.6);
  }

  & svg {
    width: 30px;
    height: 30px;
    stroke: white;
  }
`;
