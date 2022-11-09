import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function Spinner({ children }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      document.documentElement.scrollTop = 0;
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner_container w-full h-screen dark:bg-dark-mode-3">
          <div className="spinner_item text-center pt-[20%]">
            <ClipLoader
              loading={loading}
              color="#dd3333"
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}

export default Spinner;
