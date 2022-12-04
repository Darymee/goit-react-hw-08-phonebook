import PropTypes from 'prop-types';

import { StyledLink } from './ModalLink.styled';

export const ModalLink = ({ text, to }) => (
  <StyledLink to={to}>{text}</StyledLink>
);

ModalLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};
