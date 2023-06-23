import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';

import { motion } from 'framer-motion';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { ModalHome } from 'components/ModalHome/ModalHome';
import { Title } from 'components/UI/Title/Title';
import { ModalLink } from 'components/UI/ModalLink/ModalLink';

import { Wrapper, TitleLink, HomeWrapper } from './Home.styled';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isMobile = useMedia('(max-width: 768px)');

  const toggleModal = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <HomeWrapper
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      isMobile={isMobile}
    >
      <Wrapper>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            default: {
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            },
            scale: {
              type: 'spring',
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <Title
            text={
              'Welcome to Phonebook App! It will help keep your contacts online.'
            }
          />
        </motion.div>
        {isLoggedIn ? (
          <ModalLink to={'/contacts'} text={'To your contacts'} />
        ) : (
          <TitleLink onClick={toggleModal} size={isMobile ? '25px' : '30px'}>
            Try it now
          </TitleLink>
        )}
        {!isLoggedIn && isOpen && <ModalHome />}
      </Wrapper>
    </HomeWrapper>
  );
};
export default Home;
