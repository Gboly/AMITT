import Navbar from "../components/navbar/Navbar";
import "./layout.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      {/* <ErrorBoundary FallbackComponent={Error}> */}
      <Outlet />
      {/* </ErrorBoundary> */}
    </>
  );
};

export default Layout;
