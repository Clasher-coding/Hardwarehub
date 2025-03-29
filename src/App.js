import { createBrowserRouter, RouterProvider, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/payment/Payment";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import NotFound from "./NotFound/NotFound";

import Layout from "./components/Layout/Layout";

const App = () => {
  const [user, setUser] = useState(localStorage.getItem("isLogin"));

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(localStorage.getItem("isLogin"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const router = createBrowserRouter([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "shop", element: <Shop /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "journal", element: <Journal /> },
        { path: "offer", element: <Offer /> },
        { path: "product/:_id", element: <ProductDetails /> },
        { path: "cart", element: user ? <Cart /> : <Navigate to="/signin" /> },
        { path: "paymentgateway", element: user ? <Payment /> : <Navigate to="/signin" /> },
      ],
    },
    {
      path: "/signin",
      element: user ? <Navigate to="/" /> : <SignIn />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <SignUp />,
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
