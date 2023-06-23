import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';

import { useLocalStorage } from 'hooks/useLocalStorage';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Header, MobHeader, BurgerMenu } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isOpen, setIsOpen] = useLocalStorage('sideBarWidth', false);

  const [toggleMobNav, setToggleMobNav] = useState(false);

  const isMobile = useMedia('(max-width: 768px)');
  const isDesktop = useMedia('(min-width:1280px)');

  const toggleBar = () => setIsOpen(!isOpen);

  return (
    <>
      {isMobile ? (
        <MobHeader toggleMobNav={toggleMobNav}>
          <Navigation
            toggleMobNav={toggleMobNav}
            setToggleMobNav={setToggleMobNav}
          />
          {toggleMobNav && (
            <BurgerMenu>
              {isLoggedIn ? (
                <UserMenu isOpen={true} />
              ) : (
                <AuthNav isOpen={true} />
              )}
            </BurgerMenu>
          )}
        </MobHeader>
      ) : (
        <Header
          animate={{
            width: isDesktop && isOpen ? '280px' : '90px',
            padding: isDesktop && isOpen ? '10px 14px' : '10px 10px',
            transition: {
              duration: 0.5,
              type: 'spring',
              damping: 10,
            },
          }}
        >
          <Navigation
            isOpen={isDesktop ? isOpen : false}
            toggleBar={toggleBar}
            isDesktop={isDesktop}
          />

          {isLoggedIn ? (
            <UserMenu isOpen={isDesktop ? isOpen : false} />
          ) : (
            <AuthNav isOpen={isDesktop ? isOpen : false} />
          )}
        </Header>
      )}
    </>
  );
};
