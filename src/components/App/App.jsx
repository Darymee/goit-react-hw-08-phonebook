import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { MdOutlineContactPhone } from 'react-icons/md';

import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import ContactForm from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

import { Message } from 'components/Message/Message';

import { ContactWrap, Title, ContactsTitle } from './App.styled.js';

import { AppBar } from 'components/AppBar/AppBar';
import { Home } from 'pages/Home';
import { Layout } from 'components/Layout/Layout';

export default function App() {
  const dispatch = useDispatch();

  const items = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="register" element={'Register'} />
          <Route path="login" element={'Login'} />
          <Route path="contacts" element={'Contacts'} />
        </Route>
      </Routes>

      {/* <Title>
        Phonebook <MdOutlineContactPhone />
      </Title>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <ContactWrap>
        <Filter />
        {isLoading && <Message text={'Loading your contacts, please wait..'} />}

        {error && <Message text={error} />}
        {items.length > 0 && <ContactsList />}
      </ContactWrap> */}
    </>
  );
}
