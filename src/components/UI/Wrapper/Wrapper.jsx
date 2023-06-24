import PropTypes from 'prop-types';

import { Wrapp } from './Wrapper.styled';

export const Wrapper = ({ children, width, height, mr, pd, minw, maxw }) => (
  <Wrapp width={width} height={height} mr={mr} pd={pd} minw={minw} maxw={maxw}>
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
