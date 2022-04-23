import BookDetail from "../pages/BookView/BookDetail";
import Cart from "../pages/Cart/Cart";
import HSchool from "../pages/High/HSchool";
import Home from "../pages/Home/Home";
import Search from "../pages/Home/Search";
import Kindergadent from "../pages/Kindergaten/Kindergadent";
import Login from "../pages/Login/Login";
import PrSchool from "../pages/Primary/PrSchool";
import SdSchool from "../pages/Secondary/SdSchool";
import React from "react";

const routes = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/mamnon/:id",
    element: <Kindergadent />,
  },
  {
    path: "/tieuhoc/:id",
    element: <PrSchool />,
  },
  {
    path: "/thcs/:id",
    element: <SdSchool />,
  },
  {
    path: "/thpt/:id",
    element: <HSchool />,
  },
  {
    path: "/:name",
    element: <Search />,
  },
  {
    path: "/book/:id",
    element: <BookDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
