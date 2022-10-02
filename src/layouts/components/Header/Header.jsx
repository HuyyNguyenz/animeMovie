import { faBars, faCircle, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between px-8 py-[0.65rem] bg-teal-100">
        <div>
          <img
            src="https://demo.ramsthemes.com/projects/zettai-bs/wp-content/uploads/2021/11/zettai-logo-res.svg"
            alt="logo"
            className="h-[3.125rem]"
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faBars} className="text-lg" />
        </div>
        <div className="flex items-center h-9 w-[8.5rem]">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search here"
            className="w-full h-full text-sm px-3 rounded-l-md border border-solid border-grey-ccc border-r-transparent outline-0"
          />
          <button className="h-full bg-white border border-solid border-grey-ccc px-2 rounded-r-md">
            <FontAwesomeIcon icon={faSearch} className="text-grey-666" />
          </button>
        </div>
        <div className="relative w-7 h-4 bg-grey-ccc rounded-3xl">
          <FontAwesomeIcon icon={faCircle} className="absolute text-white h-full" />
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
