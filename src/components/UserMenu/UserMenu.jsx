import { useDispatch, useSelector } from 'react-redux';

import { TbLogout, TbUserCircle } from 'react-icons/tb';

import { logOut } from 'redux/auth/authOperations';
import { selectUsername } from 'redux/auth/authSelectors';

import {
  UserProfile,
  CustomAvatar,
  WelcomeText,
  UserName,
  BtnLogOut,
} from './UserMenu.styled';

export const UserMenu = ({ isOpen }) => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  return (
    <UserProfile isOpen={isOpen}>
      <CustomAvatar
        // isOpen={isOpen}
        sx={{ bgcolor: 'rgba(0, 0, 0, 0.6)', width: 45, height: 45 }}
      >
        <TbUserCircle />
      </CustomAvatar>

      <WelcomeText isOpen={isOpen}>
        Welcome, <UserName>{name}</UserName>
      </WelcomeText>
      <BtnLogOut
        type="button"
        isOpen={isOpen}
        onClick={() => dispatch(logOut())}
      >
        <TbLogout />
      </BtnLogOut>
    </UserProfile>
  );
};
