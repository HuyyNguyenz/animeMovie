import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { faBars, faCircle, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDarkMode from '../../../hooks/useDarkMode';
import Navigation from '../Navigation/Navigation';

function Header() {
  const [isLogin, setLogin] = useState(() => !!localStorage.getItem('user-token'));
  const [userData, setUserData] = useState({});
  const [searchValue, setSearchValue] = useState('');
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const navRef = useRef();

  const handleOpenMenu = () => {
    navRef.current.style.transform = 'translateX(0)';
    navRef.current.style.transition = 'all linear .4s';
  };

  const handleLogOut = () => {
    setTimeout(() => {
      setLogin(!isLogin);
      localStorage.removeItem('user-token');
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {
    const id = localStorage.getItem('user-token');
    axios.get(`http://localhost/api/controller/register.php/${id}`).then((res) => {
      setUserData(res.data);
    });
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-[100] bg-primary-color dark:bg-dark-mode-1">
      <nav className="flex items-center justify-between px-8 py-[0.45rem] max-w-[75rem] mx-auto">
        <div className="flex items-center">
          <Link to="/" className="cursor-pointer">
            <picture>
              <source
                media="(min-width:1024px)"
                srcSet="https://demo.ramsthemes.com/projects/zettai-bs/wp-content/uploads/2021/11/zettai-logo.svg"
              />
              <img
                src="https://demo.ramsthemes.com/projects/zettai-bs/wp-content/uploads/2021/11/zettai-logo-res.svg"
                alt="logo"
                className="h-[3.125rem]"
              />
            </picture>
          </Link>
          <div onClick={handleOpenMenu} className="cursor-pointer px-3 py-4">
            <FontAwesomeIcon icon={faBars} className="text-lg dark:text-white" />
          </div>
          <Navigation navRef={navRef} />
        </div>
        <div className="flex items-center h-9 w-[8.5rem] sm:w-[18.75rem] md:w-[28.125rem] lg:w-[37.5rem]">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            type="text"
            name="search"
            id="search"
            placeholder="Search here..."
            className="w-full h-full text-sm px-3 rounded-l-md border border-solid border-grey-ccc border-r-transparent outline-0"
          />
          <button className="h-full bg-white border border-solid border-grey-ccc px-2 rounded-r-md cursor-pointer">
            <FontAwesomeIcon icon={faSearch} className="text-grey-666" />
          </button>
        </div>
        {!isDarkMode ? (
          <div className="flex items-center">
            <div
              onClick={() => toggleDarkMode()}
              className="relative w-7 h-[0.9rem] bg-grey-ccc rounded-3xl cursor-pointer switch-off"
            >
              <FontAwesomeIcon icon={faCircle} className="absolute text-white w-3 h-full ml-[0.125rem] off" />
            </div>
            {isLogin ? (
              <div className="px-2 flex items-center">
                <h1 className="font-bold mr-2 dark:text-white">Hi, {userData.username}</h1>
                <button className="cursor-pointer hover:underline dark:text-white" onClick={handleLogOut}>
                  Log out
                </button>
              </div>
            ) : (
              <Link to="/login-page">
                <div className="cursor-pointer px-2">
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4 dark:text-white" />
                </div>
              </Link>
            )}
          </div>
        ) : (
          <div className="flex items-center">
            <div
              onClick={() => toggleDarkMode()}
              className="relative w-7 h-[0.9rem] bg-grey-ccc rounded-3xl cursor-pointer switch-on"
            >
              <FontAwesomeIcon icon={faCircle} className="absolute text-white w-3 h-full ml-[0.125rem] on" />
            </div>
            {isLogin ? (
              <div className="px-2 flex items-center">
                <h3 className="font-bold mr-2 dark:text-white">Hi, {userData.username}</h3>
                <button className="cursor-pointer hover:underline dark:text-white" onClick={handleLogOut}>
                  Log out
                </button>
              </div>
            ) : (
              <Link to="/login-page">
                <div className="cursor-pointer px-2">
                  <FontAwesomeIcon icon={faUser} className="w-4 h-4 dark:text-white" />
                </div>
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
