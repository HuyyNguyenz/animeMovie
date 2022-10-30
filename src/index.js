import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './index.css';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home/Home';
import DetailPost from './pages/DetailPost/DetailPost';
import AnimeNews from './pages/AnimeNews/AnimeNews';
import MangaNews from './pages/MangaNews/MangaNews';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Home />
            </DefaultLayout>
          }
        />
        <Route
          path="/tin-tuc-anime"
          element={
            <DefaultLayout>
              <AnimeNews />
            </DefaultLayout>
          }
        />
        <Route
          path="/tin-tuc-manga"
          element={
            <DefaultLayout>
              <MangaNews />
            </DefaultLayout>
          }
        />
        <Route
          path="/register-page"
          element={
            <DefaultLayout>
              <Register />
            </DefaultLayout>
          }
        />
        <Route
          path="/login-page"
          element={
            <DefaultLayout>
              <Login />
            </DefaultLayout>
          }
        />
        <Route
          path="/detail-post"
          element={
            <DefaultLayout>
              <DetailPost />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
