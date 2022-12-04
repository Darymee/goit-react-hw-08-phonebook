import { motion } from 'framer-motion';

import { ModalLink } from 'components/UI/ModalLink/ModalLink';

import { ButtonList, ButtonItem } from './ModalHome.styled';

export const ModalHome = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <ButtonList>
        <ButtonItem>
          <ModalLink to={'/register'} text={'Sing Up'} />
        </ButtonItem>
        <ButtonItem>
          <ModalLink to={'/login'} text={'Sing In'} />
        </ButtonItem>
      </ButtonList>
    </motion.div>
  );
};
