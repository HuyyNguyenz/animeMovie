import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './index.css';
import Register from './pages/Register';
import Login from './pages/Login';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/register-page" element={<Register />} />
        <Route path="/login-page" element={<Login />} />
      </Routes>
    </BrowserRouter>
    <DefaultLayout />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
