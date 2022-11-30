import { configureStore } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist';

import { authPersistedReducer, ignoreActions } from './persistConfig';

import { contactsReducer } from './slices/contactsSlice';
import { filterReducer } from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: ignoreActions,
    }),
});

export const persistor = persistStore(store);
