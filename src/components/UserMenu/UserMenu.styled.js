import styled from 'styled-components';
import { Avatar } from '@mui/material';

export const UserProfile = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: ${p => {
    if (!p.isOpen) {
      return 'column';
    }
    return 'row';
  }};

  align-items: center;
`;

export const CustomAvatar = styled(Avatar)`
  & svg {
    width: 35px;
    height: 35px;
  }
`;

export const WelcomeText = styled.p`
  font-weight: 600;
  font-size: 17px;

  color: white;

  text-align: center;
  margin-top: ${p => {
    if (!p.isOpen) {
      return '5px';
    }
    return '0';
  }};
  margin-left: ${p => {
    if (!p.isOpen) {
      return '0';
    }
    return '10px';
  }};
`;

export const UserName = styled.span`
  color: rgba(0, 0, 0, 0.6);
`;

export const BtnLogOut = styled.button`
  cursor: pointer;

  background-color: transparent;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  transition: background-color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  margin-top: ${p => {
    if (!p.isOpen) {
      return '5px';
    }
    return '0';
  }};
  margin-left: ${p => {
    if (!p.isOpen) {
      return '0';
    }
    return '10px';
  }};

  & svg {
    width: ${p => {
      if (p.isOpen) {
        return '22px';
      }
      return '35px';
    }};
    height: ${p => {
      if (p.isOpen) {
        return '22px';
      }
      return '35px';
    }};

    stroke: white;
  }

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
