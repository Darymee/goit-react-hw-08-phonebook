import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 380px;
  height: 400px;

  margin: 150px auto;
  padding: 40px;

  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 1px 7px 38px -11px rgba(0, 0, 0, 0.84);
  border: 1px rgba(0, 0, 0, 0.6) solid;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputWrapp = styled.div`
  position: relative;
  height: 45px;

  margin-bottom: 30px;

  & > svg {
    position: relative;
    top: -35px;
    left: 10px;
    width: 25px;
    height: 25px;
  }
`;

export const Input = styled.input`
  width: -webkit-fill-available;

  font-family: inherit;
  height: 40px;
  display: block;

  color: #fff;
  font-weight: 400;
  font-size: 20px;
  padding-left: 45px;

  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
  }
  & ~ label {
    transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
      font-size 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
      color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  & ~ svg {
    transition: color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &:focus ~ label,
  &:hover ~ label,
  &:active ~ label,
  &:valid ~ label {
    transform: translateY(-32px);
    font-size: 16px;
    color: #fff;
  }
  &:focus ~ svg,
  &:hover ~ svg,
  &:active ~ svg,
  &:valid ~ svg {
    color: #fff;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 15px;
  left: 45px;

  font-weight: 700;
  font-size: 15px;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 20px;
  font-family: inherit;

  cursor: pointer;
  width: 200px;
  padding: 10px 15px;
  background-color: rgba(0, 0, 0, 0.6);

  border-radius: 5px;
  margin: 0 auto;
  transition: color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &:focus,
  &:hover {
    color: #fff;
    transform: scale(0.9);
  }
`;
