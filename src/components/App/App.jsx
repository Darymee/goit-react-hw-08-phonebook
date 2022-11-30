import { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { fetchCurrentUser } from 'redux/auth/authOperations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { Home } from 'pages/Home';
import { Layout } from 'components/Layout/Layout';
import { LogIn } from 'components/LogIn/LogIn';
import { Register } from 'components/Register/Register';

export default function App() {
  const dispatch = useDispatch();

  // const items = useSelector(selectContacts);
  // const error = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="register" element={<Register />} />
          <Route path="login" element={<LogIn />} />
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
