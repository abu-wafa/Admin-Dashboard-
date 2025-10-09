import "./global.scss";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Users from "../pages/users/Users";
import User from "../pages/user/User";
import Product from "../pages/product/Product";
import Layout from "./Layout";
import Login from "../pages/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<User />} />
            <Route path="/products/:id" element={<Product />} />
          </Route>
          <Route path="*" element={<p>page not found</p>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
