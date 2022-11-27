import { useState } from 'react';

import { Modal } from 'components/Modal/Modal';

import { Wrapper, Title, TitleLink } from './Home.styled';

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleModal = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Wrapper>
        <Title>
          Welcome to Phonebook App! It will help keep your contacts online.
        </Title>
        <TitleLink onClick={toogleModal}>Try it now</TitleLink>

        {isOpen && <Modal />}
      </Wrapper>
    </div>
  );
};
