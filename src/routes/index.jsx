import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import AnimeNews from '../pages/AnimeNews';
import MangaNews from '../pages/MangaNews';
import CharNews from '../pages/CharNews';
import CultureNews from '../pages/CultureNews';
import CosplayNews from '../pages/CosplayNews';
import DetailPost from '../pages/DetailPost';
import DetailUser from '../pages/DetailUser';

const publicRoutes = [
  { path: '/', component: <Home /> },
  { path: '/login-page', component: <Login /> },
  { path: '/register-page', component: <Register /> },
  { path: '/tin-tuc-anime', component: <AnimeNews /> },
  { path: '/tin-tuc-anime/:newsTitlte/:newsId', component: <DetailPost /> },
  { path: '/tin-tuc-manga', component: <MangaNews /> },
  { path: '/tin-tuc-manga/:newsTitlte/:newsId', component: <DetailPost /> },
  { path: '/tin-tuc-nhan-vat', component: <CharNews /> },
  { path: '/tin-tuc-nhan-vat/:newsTitlte/:newsId', component: <DetailPost /> },
  { path: '/van-hoa-nhat-ban', component: <CultureNews /> },
  { path: '/van-hoa-nhat-ban/:newsTitlte/:newsId', component: <DetailPost /> },
  { path: '/tin-tuc-cosplay', component: <CosplayNews /> },
  { path: '/tin-tuc-cosplay/:newsTitlte/:newsId', component: <DetailPost /> },
];

const privateRoutes = [{ path: '/thong-tin-tai-khoan', component: <DetailUser /> }];

export { publicRoutes, privateRoutes };
