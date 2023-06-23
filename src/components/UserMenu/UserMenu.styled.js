import styled from 'styled-components';
import { Avatar } from '@mui/material';

export const UserProfile = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: ${p => (!p.isOpen || p.isMobile ? 'column' : 'row')};
  gap: ${p => (p.isMobile ? '20px' : null)};
  align-items: center;
`;

export const CustomAvatar = styled(Avatar)`
  & svg {
    height: ${p => (p.isMobile ? '40px' : '35px')};
    width: ${p => (p.isMobile ? '40px' : '35px')};
  }
`;

export const WelcomeText = styled.p`
  font-weight: 600;
  font-size: 17px;

  color: white;

  text-align: center;
  margin-top: ${p => (p.isOpen ? '5px' : null)};
  margin-left: ${p => (p.isOpen ? null : '10px')};
`;

export const UserName = styled.span`
  color: ${p => (p.isMobile ? '#fff' : 'rgba(0, 0, 0, 0.6)')};
`;

export const BtnLogOut = styled.button`
  cursor: pointer;

  background-color: transparent;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
  transition: background-color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  margin-top: ${p => (p.isOpen ? '5px' : null)};
  margin-left: ${p => (p.isOpen ? null : '10px')};

  & svg {
    width: ${p => (p.isOpen ? '22px' : '35px')};
    height: ${p => (p.isOpen ? '22px' : '35px')};
    stroke: white;
  }

  & span {
    margin-left: 10px;
    font-size: 20px;
  }

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
