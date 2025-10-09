import "./global.scss";
import { lazy, Suspense } from "react";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/loader/Loader";

const Home = lazy(() => import("../pages/home/Home"));
const Products = lazy(() => import("../pages/products/Products"));
const Users = lazy(() => import("../pages/users/Users"));
const User = lazy(() => import("../pages/user/User"));
const Product = lazy(() => import("../pages/product/Product"));
const Login = lazy(() => import("../pages/login/Login"));

function App() {
  return (
    <>
      <Router>
        {
          <Suspense fallback={<Loader color="#f054cc" />}>
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
          </Suspense>
        }
      </Router>
    </>
  );
}

export default App;
