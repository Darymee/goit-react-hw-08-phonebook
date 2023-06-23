import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = styled(motion.div)`
  position: fixed;
  z-index: 10;

  top: 0;
  left: 0;
  right: 0;

  height: 100vh;
  width: 280px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const MobHeader = styled.div`
  /* position: fixed; */

  box-sizing: border-box;

  width: 100%;

  background-color: ${p =>
    p.toggleMobNav ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.3)'};

  z-index: 10;
  top: 0;
  left: 0;
  padding: 15px 20px;
`;

export const BurgerMenu = styled.ul`
  position: absolute;
  z-index: 10;
  top: 70px;
  left: 0;
  display: flex;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;

  background-color: rgba(0, 0, 0, 0.7);

  padding: 20px 0;
`;
