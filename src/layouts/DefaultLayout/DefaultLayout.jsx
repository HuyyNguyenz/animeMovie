import Header from '../components/Header';
import Footer from '../components/Footer';

function DefaultLayout({ children }) {
  return (
    <>
      <div className="font-source">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;
