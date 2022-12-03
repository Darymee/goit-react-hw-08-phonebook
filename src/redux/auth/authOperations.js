import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);

    toast.success(`${data.user.name}, your user profile has been created!`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: 'colored',
      pauseOnHover: true,
    });
    return data;
  } catch (error) {
    const errorStatus = error.response.status;

    if (errorStatus === 400) {
      toast.warning('This user is registered, log in', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
    } else if (errorStatus === 500) {
      toast.error('Server error, please try again', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
    } else {
      toast.error('Something is wrong, please try again', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
    }
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);

    toast.success(`Welcome back, ${data.user.name}!`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: 'colored',
      pauseOnHover: true,
    });
    return data;
  } catch (error) {
    const errorStatus = error.response.status;

    if (errorStatus === 400) {
      toast.warning('Invalid email or password, try again', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
    } else {
      toast.error('Something is wrong, please try again', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
    }
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    const { data } = await axios.post('/users/logout');
    token.unset();
    toast.info(`See you again!`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: 'colored',
      pauseOnHover: true,
    });
    return data;
  } catch (error) {
    const errorStatus = error.response.status;

    if (errorStatus === 401) {
      toast.warning('Failed log out, please try again', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
    } else if (errorStatus === 500) {
      toast.error('Server error, please try again', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
    } else {
      toast.error('Something is wrong, please try again', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
    }
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');

      return data;
    } catch (error) {
      toast.error('Something is wrong, please try again', {
        position: toast.POSITION.TOP_RIGHT,
        theme: 'colored',
        pauseOnHover: true,
      });
    }
  }
);
