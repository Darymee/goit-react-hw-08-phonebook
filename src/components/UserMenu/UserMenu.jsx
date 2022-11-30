import { useDispatch, useSelector } from 'react-redux';

import { Avatar } from '@chakra-ui/react';

import { AiOutlineUser } from 'react-icons/ai';

import { logOut } from 'redux/auth/authOperations';
import { selectUsername } from 'redux/auth/authSelectors';

import { UserProfile } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  return (
    <UserProfile>
      <Avatar bg="red.500" icon={<AiOutlineUser fontSize="1.5rem" />} />
      <p>{name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserProfile>
  );
};
