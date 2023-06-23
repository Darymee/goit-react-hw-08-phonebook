import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useMedia } from 'react-use';

import { BsArrowBarLeft } from 'react-icons/bs';
import { TbMenu2, TbHome2, TbAddressBook, TbCircleX } from 'react-icons/tb';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { NavItem } from 'components/NavItem/NavItem';

import {
  HeaderWrapper,
  LogoLink,
  MenuBtn,
  MenuBtnMob,
} from './Navigation.styled';

export const Navigation = ({
  isOpen,
  isDesktop,
  toggleBar,
  toggleMobNav,
  setToggleMobNav,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isMobile = useMedia('(max-width: 768px)');

  return (
    <>
      {isMobile ? (
        <HeaderWrapper>
          <div>
            <LogoLink href="/goit-react-hw-08-phonebook">PB</LogoLink>
          </div>
          <MenuBtnMob
            type="button"
            onClick={() => setToggleMobNav(prevState => !prevState)}
            isOpen={isOpen}
          >
            {toggleMobNav ? <TbCircleX /> : <TbMenu2 />}
          </MenuBtnMob>
        </HeaderWrapper>
      ) : (
        <>
          <div>
            <LogoLink
              href="/goit-react-hw-08-phonebook"
              isDesktop={isDesktop}
              isOpen={isOpen}
            >
              {!isOpen ? 'PB' : 'Phonebook'}
            </LogoLink>
          </div>
          {isDesktop && (
            <MenuBtn type="button" onClick={toggleBar} isOpen={isOpen}>
              {isOpen ? <BsArrowBarLeft /> : <TbMenu2 />}
            </MenuBtn>
          )}

          <ul>
            <NavItem href={'/'} text={'Home'} Icon={TbHome2} isOpen={isOpen} />
            {isLoggedIn && (
              <NavItem
                href={'/contacts'}
                text={'Contacts'}
                Icon={TbAddressBook}
                isOpen={isOpen}
                onMobMenuClose={setToggleMobNav}
                isModalMenuOpen={toggleMobNav}
              />
            )}
          </ul>
        </>
      )}
    </>
  );
};

Navigation.propTypes = {
  isOpen: PropTypes.bool,
  toggleBar: PropTypes.func,
};
