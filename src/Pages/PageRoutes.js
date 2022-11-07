import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import Orders from "./Orders/Orders";
import Products from "./Products/Products";
import Reviews from "./Reviews/Reviews";
import Checkout from "./Checkout/Checkout";
import { map, uniqueId } from "lodash";

const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
  {
    path: "/checkout/*",
    element: <Checkout />,
  },
  {
    path: "*",
    element: <Checkout />,
  },
];

const PageRoutes = () => {
  const routesList = map(routes, ({ path, element }) => (
    <Route key={uniqueId("route")} path={path} element={element} exact />
  ));
  return (
    <div className="protected-route">
      <Routes>{routesList}</Routes>
    </div>
  );
};

export default PageRoutes;
