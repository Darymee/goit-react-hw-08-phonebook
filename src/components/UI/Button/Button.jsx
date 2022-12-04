import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

export const Button = ({ text }) => <Btn>{text}</Btn>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
