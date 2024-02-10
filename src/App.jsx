import React from "react";
import Layout from "./layout";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom/dist/umd/react-router-dom.development";

// Screens:
import Customers from "./screens/customers/index";
import OwnerAccount from "./screens/ownerAccount";
import Companies from "./screens/companies";
import Modal from "./components/Modal";
import Items from "./screens/items";
import Expenses from "./screens/expenses";
import Accounts from "./screens/accounts";
import ErrorPage from "./utils/errorPage";
import Vender from "./screens/venders";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<OwnerAccount />} />
          <Route path="customers" element={<Customers />} />
          <Route path="companies" element={<Companies />} />
          <Route path="items" element={<Items />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="venders" element={<Vender />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Modal />
    </BrowserRouter>
  );
};

export default App;
