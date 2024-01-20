import { Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import Home from "../page/home/Home";
import About from "../page/about/About";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <App>
            <Layout />
          </App>
        }
      >
        <Route index element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Route>
    </Routes>
  );
}
