import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCurrentUser } from 'redux/auth/authOperations';
import { selectIsRefreshing } from 'redux/auth/authSelectors';

import { PrivateRoute } from 'routes/PrivateRoute';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { Loader } from 'components/UI/Loader';

const Layout = lazy(() => import('components/Layout/Layout'));
const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const Contacts = lazy(() => import('pages/Contacts/Contaсts'));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      {!isRefreshing && (
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
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Suspense>
  );
}
