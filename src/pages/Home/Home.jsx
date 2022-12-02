import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { Modal } from 'components/Modal/Modal';
import { Title } from 'components/UI/Title/Title';
import { ModalLink } from 'components/UI/ModalLink/ModalLink';

import { Wrapper, TitleLink } from './Home.styled';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toogleModal = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Title
        text={
          'Welcome to Phonebook App! It will help keep your contacts online.'
        }
      />

      {isLoggedIn ? (
        <ModalLink to={'/contacts'} text={'To your contacts'} />
      ) : (
        <TitleLink onClick={toogleModal}>Try it now</TitleLink>
      )}
      {!isLoggedIn && isOpen && <Modal />}
    </Wrapper>
  );
};
