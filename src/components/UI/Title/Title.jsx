import PropTypes from 'prop-types';

import { MainTitle } from './Title.styled';

export const Title = ({ text, size, mb }) => (
  <MainTitle size={size} mb={mb}>
    {text}
  </MainTitle>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string,
  mb: PropTypes.string,
};
