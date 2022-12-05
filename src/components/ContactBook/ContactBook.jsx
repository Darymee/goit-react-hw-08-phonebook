import { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';

import { Loader } from 'components/UI/Loader';
import { ContactsList } from 'components/ContactsList/ContactsList.jsx';
import { ModalEdit } from 'components/ModalEdit/ModalEdit.jsx';
import { Message } from 'components/UI/Message/Message.jsx';

export const ContactBook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState(null);

  const contacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const getInfo = info => {
    setContactInfo(info);
  };
  return (
    <>
      {isLoading && <Loader />}
      {!contacts.length ? (
        <Message text={'No contacts yet. Add your first contact'} />
      ) : (
        <ContactsList getInfo={getInfo} toggleModal={toggleModal} />
      )}

      {isOpen && (
        <ModalEdit onClose={toggleModal} toggle={isOpen} info={contactInfo} />
      )}
    </>
  );
};
