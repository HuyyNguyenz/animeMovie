import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './index.css';
import DefaultLayout from './layouts/DefaultLayout';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import DetailPost from './pages/DetailPost';
import AnimeNews from './pages/AnimeNews';
import MangaNews from './pages/MangaNews';
import CharNews from './pages/CharNews';
import CultureNews from './pages/CultureNews';
import CosplayNews from './pages/CosplayNews';

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
        <Route path="/tin-tuc-anime" element={<AnimeNews />} />
        <Route path="/tin-tuc-manga" element={<MangaNews />} />
        <Route path="/tin-tuc-nhan-vat" element={<CharNews />} />
        <Route path="/van-hoa-nhat-ban" element={<CultureNews />} />
        <Route path="/tin-tuc-cosplay" element={<CosplayNews />} />
        <Route path="/register-page" element={<Register />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/detail-post" element={<DetailPost />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
