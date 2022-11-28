import { useState } from 'react';

import { Modal } from 'components/Modal/Modal';
import { Title } from 'components/UI/Title/Title';

import { Wrapper, TitleLink } from './Home.styled';

export const Home = () => {
  const [isOpen, setisOpen] = useState(false);

  const toogleModal = () => {
    return setisOpen(!isOpen);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Wrapper>
        <Title
          text={
            'Welcome to Phonebook App! It will help keep your contacts online.'
          }
        />

        <TitleLink onClick={toogleModal}>Try it now</TitleLink>

        {isOpen && <Modal />}
      </Wrapper>
    </div>
  );
};
