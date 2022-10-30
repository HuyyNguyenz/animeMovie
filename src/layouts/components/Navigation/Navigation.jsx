import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import navbarImage from '../../../assets/images/image-navbar.jpg';

function Navigation({ navRef }) {
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
        <div className="my-4 mx-8 dark:text-white">
          <ul>
            <Link to="/">
              <li
                onClick={handleCloseMenu}
                className="p-5 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75 dark:hover:bg-dark-mode-hover"
              >
                Trang Chủ
              </li>
            </Link>
            <Link to="/tin-tuc-anime">
              <li
                onClick={handleCloseMenu}
                className="p-5 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75 dark:hover:bg-dark-mode-hover"
              >
                Tin Tức Anime
              </li>
            </Link>
            <Link to="/tin-tuc-manga">
              <li
                onClick={handleCloseMenu}
                className="p-5 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75 dark:hover:bg-dark-mode-hover"
              >
                Tin Tức Manga
              </li>
            </Link>
            <Link to="/tin-tuc-nhan-vat">
              <li
                onClick={handleCloseMenu}
                className="p-5 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75 dark:hover:bg-dark-mode-hover"
              >
                Tin Tức Nhân Vật
              </li>
            </Link>
            <Link to="/van-hoa-nhat-ban">
              <li
                onClick={handleCloseMenu}
                className="p-5 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75 dark:hover:bg-dark-mode-hover"
              >
                Văn Hoá Nhật Bản
              </li>
            </Link>
            <Link to="/tin-tuc-cosplay">
              <li
                onClick={handleCloseMenu}
                className="p-5 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75 dark:hover:bg-dark-mode-hover"
              >
                Cosplay
              </li>
            </Link>
            <li className="py-5 ">
              <img src={navbarImage} alt="navbar-img" className="rounded-lg w-full" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
