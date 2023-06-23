import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register, fetchCurrentUser } from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },

    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefreshing = false;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});
export const authReducer = authSlice.reducer;
