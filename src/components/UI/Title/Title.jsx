import PropTypes from 'prop-types';
import { useMedia } from 'react-use';

import { MainTitle } from './Title.styled';

export const Title = ({ text, size, mb }) => {
  const isMobile = useMedia('(max-width: 768px)');

  return (
    <MainTitle size={isMobile ? '30px' : size} mb={mb}>
      {text}
    </MainTitle>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  mb: PropTypes.string,
};
