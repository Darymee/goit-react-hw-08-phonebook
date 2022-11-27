import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './slices/contactsSlice';
import { filterReducer } from './slices/filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
