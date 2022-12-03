import { BsArrowBarLeft } from 'react-icons/bs';
import { TbMenu2, TbHome2, TbAddressBook } from 'react-icons/tb';

import { NavItem } from 'components/NavItem/NavItem';

import { LogoLink, MenuBtn } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Navigation = ({ isOpen, toogleBar }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div>
        <LogoLink href="/goit-react-hw-08-phonebook">
          {!isOpen ? 'PB' : 'Phonebook'}
        </LogoLink>
      </div>
      <MenuBtn type="button" onClick={toogleBar} isOpen={isOpen}>
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
