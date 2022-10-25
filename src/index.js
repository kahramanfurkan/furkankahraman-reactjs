import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "antd/dist/antd.min.css";
import AppRoutes from './routes';
import {BrowserRouter} from 'react-router-dom';
import {store} from './store';
import { Provider } from 'react-redux';
import services from './services';

services.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Provider>
);

