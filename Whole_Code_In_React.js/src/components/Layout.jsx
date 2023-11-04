import Footer from "./Footer";
import Nav from "./Nav";
import Top from "./Top";
import "../index.css";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <Top />
      <Nav />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <div className="feedback">FEEDBACK</div>
      <Footer />
    </div>
  );
};

export default Layout;
