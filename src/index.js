import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import { publicRoutes, privateRoutes } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
const userToken = localStorage.getItem('user_token')
  ? localStorage.getItem('user_token')
  : sessionStorage.getItem('user_token');
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return <Route key={index} path={route.path} element={Page} />;
        })}
        {userToken
          ? privateRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={Page} />;
            })
          : ''}
      </Routes>
    </Router>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
