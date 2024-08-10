import Footer from "./Footer";
import Navbar from "./Navbar";

const LayoutLandingPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutLandingPage;
