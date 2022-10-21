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

  return (
    <>
      <div className="relative font-source">
        <Header />
        {children}
        <Footer />
        {scrollY ? (
          <Link to="/">
            <button className="fixed w-8 h-8 rounded-xl bottom-8 right-4 bg-read-more-btn">
              <FontAwesomeIcon className="text-white" icon={faArrowUp} />
            </button>
          </Link>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default DefaultLayout;
