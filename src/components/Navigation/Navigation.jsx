import { BsArrowBarLeft } from 'react-icons/bs';
import { TbMenu2, TbHome2 } from 'react-icons/tb';

import { NavItem } from 'components/NavItem/NavItem';

import { LogoLink, MenuBtn } from './Navigation.styled';

export const Navigation = ({ isOpen, toogleBar }) => {
  return (
    <>
      <div>
        <LogoLink href="/">{!isOpen ? 'PB' : 'Phonebook'}</LogoLink>
      </div>
      <MenuBtn type="button" onClick={toogleBar} isOpen={isOpen}>
        {isOpen ? <BsArrowBarLeft /> : <TbMenu2 />}
      </MenuBtn>
      <NavItem href={'/'} text={'Home'} Icon={TbHome2} isOpen={isOpen} />
    </>
  );
};
