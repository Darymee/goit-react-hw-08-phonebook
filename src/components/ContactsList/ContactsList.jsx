import { useSelector } from 'react-redux';

import { selectFilteredContact } from 'redux/selectors';

import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

import { ContactsUl } from './ContactsList.styled.js';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContact);

  return (
    <ContactsUl>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactsListItem key={id} name={name} phone={phone} id={id} />
      ))}
    </ContactsUl>
  );
};
