import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import vanSlice from './features/vanslice';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer:{
    vans:vanSlice
  }
})
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <Header />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
