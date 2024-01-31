import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "./layout.css";
import { Outlet } from "react-router-dom";
import { getSuccessState } from "../app/applicationSlice";
import Successful from "../components/successful/Successful";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Layout = () => {
  const isSuccessful = useSelector(getSuccessState);

  useEffect(() => {
    isSuccessful && (document.body.style.overflow = "hidden");
  }, [isSuccessful]);

  return (
    <>
      {isSuccessful && <Successful />}
      <Navbar />
      {/* <ErrorBoundary FallbackComponent={Error}> */}
      <Outlet />
      {/* </ErrorBoundary> */}
      <Footer />
    </>
  );
};

export default Layout;
