import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCurrentUser } from 'redux/auth/authOperations';

import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

import { Home } from 'pages/Home/Home';
import { LogIn } from 'pages/LogIn/LogIn';
import { Contacts } from 'pages/Contacts/Contaсts';
import { Layout } from 'components/Layout/Layout';

import { Register } from 'pages/Register/Register';
import { selectIsRefreshing } from 'redux/auth/authSelectors';

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  // const items = useSelector(selectContacts);
  // const error = useSelector(selectError);
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />

          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    )
  );
}
