import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navbarImage from '../../../assets/images/image-navbar.jpg';

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 z-[200] bg-navbar-bg-color w-[19.5rem] h-full">
      <div className="flex flex-col">
        <div className="self-end my-4 mr-8">
          <FontAwesomeIcon icon={faXmark} className="text-lg cursor-pointer" />
        </div>
        <div className="my-4 mx-8">
          <ul>
            <li className="p-5 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75">
              All News
            </li>
            <li className="p-5 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75">
              All Featured Reviews
            </li>
            <li className="p-5 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75">
              All Featured Posts
            </li>
            <li className="p-5 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75">
              All Movies and Series
            </li>
            <li className="p-5 cursor-pointer hover:bg-navbar-hover-color rounded-lg transition-all ease-linear delay-75">
              All Popular Reads
            </li>
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
