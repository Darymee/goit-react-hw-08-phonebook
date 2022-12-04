import PropTypes from 'prop-types';

import { Wrapp } from './Wrapper.styled';

export const Wrapper = ({ children, width, heigth, mr, pd, minw }) => (
  <Wrapp width={width} heigth={heigth} mr={mr} pd={pd} minw={minw}>
    {children}
  </Wrapp>
);

Wrapper.propTypes = {
  width: PropTypes.string,
  heigth: PropTypes.string,
  mr: PropTypes.string,
  pd: PropTypes.string,
  minw: PropTypes.string,
};
