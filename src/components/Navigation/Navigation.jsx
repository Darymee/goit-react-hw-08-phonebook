import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { BsArrowBarLeft } from 'react-icons/bs';
import { TbMenu2, TbHome2, TbAddressBook } from 'react-icons/tb';

import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import { NavItem } from 'components/NavItem/NavItem';

import { LogoLink, MenuBtn } from './Navigation.styled';

export const Navigation = ({ isOpen, toggleBar }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div>
        <LogoLink href="/goit-react-hw-08-phonebook">
          {!isOpen ? 'PB' : 'Phonebook'}
        </LogoLink>
      </div>
      <MenuBtn type="button" onClick={toggleBar} isOpen={isOpen}>
        {isOpen ? <BsArrowBarLeft /> : <TbMenu2 />}
      </MenuBtn>
      <ul>
        <NavItem href={'/'} text={'Home'} Icon={TbHome2} isOpen={isOpen} />
        {isLoggedIn && (
          <NavItem
            href={'/contacts'}
            text={'Contacts'}
            Icon={TbAddressBook}
            isOpen={isOpen}
          />
        )}
      </ul>
    </>
  );
};

Navigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleBar: PropTypes.func.isRequired,
};
