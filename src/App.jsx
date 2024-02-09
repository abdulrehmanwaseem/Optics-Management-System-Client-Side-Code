import React from "react";
import Layout from "./layout";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom/dist/umd/react-router-dom.development";
import Customers from "./screens/customers/index";
import OwnerAccount from "./screens/ownerAccount";
import Companies from "./screens/companies";
import ErrorPage from "./screens/errorPage";
import Modal from "./components/Modal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<OwnerAccount />} />
          <Route path="customers" element={<Customers />} />
          <Route path="companies" element={<Companies />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Modal />
    </BrowserRouter>
  );
};

export default App;
