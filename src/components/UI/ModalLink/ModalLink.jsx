import { StyledLink } from './ModalLink.styled';

export const ModalLink = ({ text, to }) => (
  <StyledLink to={to}>{text}</StyledLink>
);
