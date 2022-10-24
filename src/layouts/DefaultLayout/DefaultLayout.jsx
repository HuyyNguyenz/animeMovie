import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DefaultLayout({ children }) {
  const [scrollY, setScrollY] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setScrollY(!scrollY);
      } else {
        setScrollY(false);
      }
    });
  }, []);

  const handleScrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <div className="dark:bg-dark-mode-3 relative font-source">
        <Header />
        {children}
        <Footer />
        {scrollY ? (
          <button onClick={handleScrollToTop} className="fixed w-8 h-8 rounded-xl bottom-8 right-4 bg-read-more-btn">
            <FontAwesomeIcon className="text-white" icon={faArrowUp} />
          </button>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default DefaultLayout;
