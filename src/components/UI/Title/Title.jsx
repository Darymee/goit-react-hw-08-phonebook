import { MainTitle } from './Title.styled';

export const Title = ({ text, size, mb }) => {
  return (
    <>
      <MainTitle size={size} mb={mb}>
        {text}
      </MainTitle>
    </>
  );
};
