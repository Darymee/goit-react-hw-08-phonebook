import { ModalLink } from 'components/UI/ModalLink/ModalLink';
import { ButtonList, ButtonItem } from './Modal.styled';

export const Modal = () => {
  return (
    <ButtonList>
      <ButtonItem>
        <ModalLink to={'/register'} text={'Sing Up'} />
      </ButtonItem>
      <ButtonItem>
        <ModalLink to={'/login'} text={'Sing In'} />
      </ButtonItem>
    </ButtonList>
  );
};
