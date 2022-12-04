import { Wrapp } from './Wrapper.styled';

export const Wrapper = ({ children, width, heigth, mr, pd, minw }) => (
  <Wrapp width={width} heigth={heigth} mr={mr} pd={pd} minw={minw}>
    {children}
  </Wrapp>
);
