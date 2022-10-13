import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation/Navigation';

function DefaultLayout({ children }) {
  return (
    <>
      <div className="font-source">
        <Header />
        <Navigation />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;
