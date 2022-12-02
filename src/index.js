import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { persistor } from './redux/store';

import App from 'components/App/App';

import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>
);
