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
