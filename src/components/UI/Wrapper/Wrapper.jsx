import { Wrapp } from './Wrapper.styled';

export const Wrapper = ({ children, width, heigth, mr, pd }) => (
  <Wrapp width={width} heigth={heigth} mr={mr} pd={pd}>
    {children}
  </Wrapp>
);
