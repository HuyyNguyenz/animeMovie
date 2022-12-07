import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navbarImage from '../../../assets/images/image-navbar.jpg';

function Navigation({ navRef }) {
  const [categories, setCategories] = useState([]);
  const [isLogin] = useState(() => {
    const userToken = localStorage.getItem('user_token')
      ? localStorage.getItem('user_token')
      : sessionStorage.getItem('user_token');
    return userToken;
  });

  useEffect(() => {
    handleGetCategories();
  }, []);

  const handleGetCategories = () => {
    axios.get('http://localhost/anime_news/admin/api/controller/category.php').then((res) => {
      setCategories(res.data);
    });
  };

  const handleCloseMenu = () => {
    navRef.current.style.transform = 'translateX(-100%)';
    navRef.current.style.transition = 'all linear .4s';
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 z-[200] bg-navbar-bg-color w-[19.5rem] h-full translate-x-[-100%] dark:bg-dark-mode-1"
    >
      <div className="flex flex-col">
        <div onClick={handleCloseMenu} className="self-end my-4 mr-8 dark:text-white">
          <FontAwesomeIcon icon={faXmark} className="text-lg cursor-pointer p-2" />
        </div>
        <div className="flex flex-col my-4 mx-8 dark:text-white">
          <ul className="max-h-[20rem] overflow-y-scroll">
            <Link to="/">
              <li
                onClick={handleCloseMenu}
                className="p-5 mr-2 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75 dark:hover:bg-dark-mode-hover"
              >
                Trang Chủ
              </li>
            </Link>

            {isLogin ? (
              <Link to="/thong-tin-tai-khoan">
                <li
                  onClick={handleCloseMenu}
                  className="p-5 mr-2 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75 dark:hover:bg-dark-mode-hover"
                >
                  Trang Cá Nhân
                </li>
              </Link>
            ) : (
              ''
            )}

            {categories.map((category) => {
              let href = '';
              switch (category.id) {
                case '7':
                  href = '/tin-tuc-anime';
                  break;
                case '9':
                  href = '/tin-tuc-nhan-vat';
                  break;
                case '10':
                  href = '/tin-tuc-manga';
                  break;
                case '11':
                  href = '/van-hoa-nhat-ban';
                  break;
                case '12':
                  href = '/tin-tuc-cosplay';
                  break;
                default:
                  break;
              }
              return (
                <Link key={category.id} to={href}>
                  <li
                    onClick={handleCloseMenu}
                    className="p-5 mr-2 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75 dark:hover:bg-dark-mode-hover"
                  >
                    {category.name}
                  </li>
                </Link>
              );
            })}
          </ul>
          <p className="py-5 ">
            <img src={navbarImage} alt="navbar-img" className="rounded-lg w-full" />
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
