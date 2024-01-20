import { useLayoutEffect } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";

function App({ children }) {
  // Treat Top level state here

  const location = useLocation();

  // Each page should be rendered from top.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
}

export default App;
