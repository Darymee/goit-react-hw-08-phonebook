import { ButtonList, ButtonItem, ModalBtn } from './Modal.styled';

export const Modal = () => {
  return (
    <div>
      <ButtonList>
        <ButtonItem>
          <ModalBtn to={'login'}>Sing In</ModalBtn>
        </ButtonItem>
        <ButtonItem>
          <ModalBtn to={'register'}>Sing Up</ModalBtn>
        </ButtonItem>
      </ButtonList>
    </div>
  );
};
