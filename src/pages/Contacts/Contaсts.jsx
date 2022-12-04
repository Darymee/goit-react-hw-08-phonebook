import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/contactsOperations';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactBook } from 'components/ContactBook/ContactBook';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const Contacts = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <ContactForm />
      <ContactBook />
    </>
  );
};

export default Contacts;
