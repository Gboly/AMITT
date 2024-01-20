import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <ErrorBoundary FallbackComponent={Error}> */}
      <Outlet />
      {/* </ErrorBoundary> */}
      <Footer />
    </>
  );
};

export default Layout;
