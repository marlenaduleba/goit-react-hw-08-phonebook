import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store.js';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from './styles/styles.js';
import { HelmetProvider } from 'react-helmet-async';



import { App } from 'components/App';
import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor} >
        <BrowserRouter basename='/goit-react-hw-08-phonebook' >
          <ThemeProvider theme={theme} >
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);