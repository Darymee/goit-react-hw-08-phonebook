import PropTypes from 'prop-types';

import { useMedia } from 'react-use';

import { StyledLink } from './ModalLink.styled';

export const ModalLink = ({ text, to }) => {
  const isMobile = useMedia('(max-width: 768px)');

  return (
    <StyledLink to={to} size={isMobile ? '16px' : '20px'}>
      {text}
    </StyledLink>
  );
};

ModalLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
