import { Route, Routes } from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";

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
      ></Route>
    </Routes>
  );
}
