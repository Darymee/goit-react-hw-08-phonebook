import { MainTitle } from './Title.styled';

export const Title = ({ text, size, mb }) => (
  <MainTitle size={size} mb={mb}>
    {text}
  </MainTitle>
);
