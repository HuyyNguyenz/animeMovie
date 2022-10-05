import { useRef, useState } from 'react';
import { faBars, faCircle, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [switchMode, setSwitchMode] = useState(true);
  const switchBtnRef = useRef();
  const switchIconRef = useRef();

  const handleSwitchOn = () => {
    console.log('On');
    switchBtnRef.current.style.backgroundColor = '#2196f3';
    switchIconRef.current.style.transform = 'translateX(100%)';
    switchIconRef.current.style.transition = 'all linear 0.2s';
    setSwitchMode((prev) => !prev);
  };

  const handleSwitchOff = () => {
    console.log('Off');
    switchBtnRef.current.style.backgroundColor = '#ccc';
    switchIconRef.current.style.transform = 'translateX(0)';
    switchIconRef.current.style.transition = 'all linear 0.2s';
    setSwitchMode((prev) => !prev);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-[100]">
      <nav className="flex items-center justify-between px-8 py-[0.45rem] bg-teal-100">
        <div className="flex items-center">
          <img
            src="https://demo.ramsthemes.com/projects/zettai-bs/wp-content/uploads/2021/11/zettai-logo-res.svg"
            alt="logo"
            className="h-[3.125rem]"
          />
          <div className="cursor-pointer px-3 py-4">
            <FontAwesomeIcon icon={faBars} className="text-lg" />
          </div>
        </div>
        <div className="flex items-center h-9 w-[8.5rem]">
          <input
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            type="text"
            name="search"
            id="search"
            placeholder="Search here"
            className="w-full h-full text-sm px-3 rounded-l-md border border-solid border-grey-ccc border-r-transparent outline-0"
          />
          <button className="h-full bg-white border border-solid border-grey-ccc px-2 rounded-r-md cursor-pointer">
            <FontAwesomeIcon icon={faSearch} className="text-grey-666" />
          </button>
        </div>
        <div className="flex items-center">
          <div
            onClick={switchMode ? handleSwitchOn : handleSwitchOff}
            ref={switchBtnRef}
            className="relative w-7 h-[0.9rem] bg-grey-ccc rounded-3xl cursor-pointer"
          >
            <FontAwesomeIcon
              forwardedRef={switchIconRef}
              icon={faCircle}
              className="absolute text-white w-3 h-full ml-[0.125rem]"
            />
          </div>
          <div className="cursor-pointer px-2">
            <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
