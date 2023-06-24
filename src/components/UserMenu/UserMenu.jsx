import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { useMedia } from 'react-use';

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

export const UserMenu = ({ isOpen, setToggleMobNav }) => {
  const dispatch = useDispatch();
  const isMobile = useMedia('(max-width: 768px)');

  const name = useSelector(selectUsername);

  const cutName = userName =>
    userName.length > 10 ? userName.slice(0, 6) + '...' : userName;

  const onLogout = () => {
    setToggleMobNav(prevState => (prevState ? !prevState : false));

    dispatch(logOut());
  };

  console.log(setToggleMobNav);

  return (
    <UserProfile isOpen={isOpen} isMobile={isMobile}>
      <CustomAvatar
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.6)',
          width: isMobile ? 50 : 45,
          height: isMobile ? 50 : 45,
        }}
        isMobile={isMobile}
      >
        <TbUserCircle />
      </CustomAvatar>

      <WelcomeText isOpen={isOpen}>
        Welcome,{' '}
        <UserName isMobile={isMobile}>{isOpen ? name : cutName(name)}</UserName>
      </WelcomeText>
      <BtnLogOut
        type="button"
        isOpen={isOpen}
        isMobile={isMobile}
        onClick={() => onLogout()}
      >
        <TbLogout />
        {isMobile && <span> Log out</span>}
      </BtnLogOut>
    </UserProfile>
  );
};

UserMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
