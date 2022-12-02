import { useSelector } from 'react-redux';

import {
  selectContacts,
  selectFilteredContact,
} from 'redux/contacts/contactsSelectors';

import { ContactListItem } from 'components/ContactListItem/ContactListItem.jsx';

import { Wrapper } from 'components/UI/Wrapper/Wrapper.jsx';
import { Message } from 'components/UI/Message/Message.jsx';
import { Title } from 'components/UI/Title/Title.jsx';

import { TableHead } from './ContactsList.styled.js';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContact);
  console.log(filteredContacts);

  return (
    <Wrapper mr={'30px auto'} pd={'20px'}>
      {contacts.length > 0 ? (
        <>
          <Title text={'Contacts list'} size={'25px'} mb={'20px'} />
          <table>
            <thead>
              <tr>
                <TableHead></TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Edit</TableHead>
                <TableHead>Remove</TableHead>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map(({ id, name, number }) => (
                <ContactListItem key={id} id={id} name={name} number={number} />
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <Message text={'No contacts yet. Add your first contact'} />
      )}
    </Wrapper>
  );
};
