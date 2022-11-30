import { useState } from 'react';

import { Modal } from 'components/Modal/Modal';
import { Title } from 'components/UI/Title/Title';

import { Wrapper, TitleLink } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Message } from 'components/Message/Message';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const toogleModal = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Wrapper>
        <Title
          text={
            'Welcome to Phonebook App! It will help keep your contacts online.'
          }
        />

        {isLoggedIn ? (
          <Message text={'Welcome back!'} />
        ) : (
          <TitleLink onClick={toogleModal}>Try it now</TitleLink>
        )}
        {!isLoggedIn && isOpen && <Modal />}
      </Wrapper>
    </div>
  );
};
