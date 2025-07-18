import { Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import Home from "../page/home/Home";
import About from "../page/about/About";
import Contact from "../page/contact/Contact";
import Faq from "../page/faq/Faq";
import Application from "../page/application/Application";
import Unsubscribe from "../page/unsubscribe/Unsubscribe";
import Fsa from "../page/fsa/Fsa";

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/application" element={<Application />} />
        <Route path="/fsa" element={<Fsa />} />
      </Route>
      <Route path="/unsubscribe" element={<Unsubscribe />} />
      <Route path="/*" element={<></>} />
    </Routes>
  );
}
